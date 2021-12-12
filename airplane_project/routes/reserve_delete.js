// Router을 사용하기 위해 express를 불러오고 
// database/sql로 부터 selectSql(삭제위해 데이터 조회), deleteSql모델 사용
import express from "express";
import {selectSql, deleteSql, updateSql} from "../database/sql";

const router = express.Router();

router.get('/', async (req, res) => {
    const reserve = await selectSql.getreserveview();
   
    res.render('reserve_delete', {
        title: "SEAT RESERVATION 데이터 삭제",
        reserve
    });
});

// 삭제 버튼을 눌렀을 경우 delete query를 실행
router.post('/', async (req, res) => {
    const vars = req.body;
    var dt= new Date(vars.leg_date);
    var str = dt.getFullYear()+'-'+(dt.getMonth()+1)+'-'+dt.getDate();

    const data ={
        Flight_Number: vars.flight_number,
        Leg_Number: vars.leg_number,
        Leg_Date: str,
        Seat_Number: vars.seat_number,
    }
    deleteSql.deletereserve(data);
    updateSql.updateseatincrease(data);

    res.redirect('/user/reserve');
});

module.exports = router;