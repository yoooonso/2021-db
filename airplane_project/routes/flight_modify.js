// Router을 사용하기 위해 express를 불러오고 
// database/sql로 부터 selectSql(수정위해 데이터 조회), UpdateSql모델 사용
import express from "express";
import {selectSql, updateSql} from "../database/sql";

const router = express.Router();

router.get('/', async (req, res) => {
    const leg_instance = await selectSql.getleginstance();
    res.render('flight_modify', {
        title: "flight leg instance 데이터 갱신",
        leg_instance
    });
});

// 수정 버튼을 눌렀을 경우 update query를 실행하면 조회 페이지로 이동
router.post('/', async (req, res) => {
    const vars = req.body; // 변수를 받음
    console.log(vars.leg_date);
    var dt= new Date(vars.leg_date);
    var str = dt.getFullYear()+'-'+(dt.getMonth()+1)+'-'+dt.getDate();
    var dt1=new Date(vars.departure_time);
    var dt2=new Date(vars.arrival_time);
    const data = { 
        Flight_Number: vars.flight_number,
        Leg_Number: vars.leg_number,
        Leg_Date: str,
        NO_OF_AVAILABLE_SEATS: vars.no_of_available_seats,
        Airplane_Id: vars.airplane_id,
        DEPARTURE_TIME: dateFormat(dt1),
        ARRIVAL_TIME: dateFormat(dt2),
    }
    await updateSql.updateinstance(data);

    res.redirect('/admin/flight'); 
});
function dateFormat(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;
    hour = hour >= 10 ? hour : '0' + hour;
    minute = minute >= 10 ? minute : '0' + minute;
    second = second >= 10 ? second : '0' + second;

    return date.getFullYear() + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
}
module.exports = router;