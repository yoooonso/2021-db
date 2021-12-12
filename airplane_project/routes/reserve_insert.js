// Router을 사용하기 위해 express를 불러오고 
// database/sql로 부터 insertSql모델 사용 
import express from "express";
import { selectSql, insertSql, updateSql} from "../database/sql";

const router = express.Router();

router.get('/', async(req, res) => {
    const flightview = await selectSql.getflightview();
    const fares = await selectSql.getfares();
    res.render('reserve_insert', {
        title: 'FLIGHT VIEW',
        title2: 'FARES',
        flightview,
        fares
    });
});

// post에서 삽입된 값들 처리, 값들은 req로 받았고 vars에 저장됨 
router.post('/', async(req, res) => {
    const vars = req.body;
    var dt= new Date(vars.leg_date);
    var str = dt.getFullYear()+'-'+(dt.getMonth()+1)+'-'+dt.getDate();
    
    const data = { // employee의 값을 받아서 data 객체를 만듦
        Flight_Number: vars.flight_number,
        Leg_Number: vars.leg_number,
        Leg_Date: str,
        Seat_Number: vars.seat_number,
        Airplane_Id: vars.airplane_id,
        Customer_Id: vars.customer_id
    }
    updateSql.updateseatdecrease(data);
    insertSql.setseatreservation(data); 

    res.redirect('/user/reserve'); 
})

module.exports = router;