// Router을 사용하기 위해 express를 불러오고 
// database/sql로 부터 selectSql(삭제위해 데이터 조회), deleteSql모델 사용
import express from "express";
import {selectSql, deleteSql} from "../database/sql";

const router = express.Router();

router.get('/', async (req, res) => {
    const leg_instance = await selectSql.getleginstance();
   
    res.render('flight_delete', {
        title: "leg instance 데이터 삭제",
        leg_instance
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
    }
    
    await deleteSql.deleteinstance(data);
   
    res.redirect('/admin/flight'); 
});

module.exports = router;