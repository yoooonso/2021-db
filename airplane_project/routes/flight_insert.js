// Router을 사용하기 위해 express를 불러오고 
// database/sql로 부터 insertSql모델 사용 
import express from "express";
import { selectSql, insertSql} from "../database/sql";

const router = express.Router();

router.get('/', async(req, res) => {
    res.render('flight_insert');
});

// post에서 삽입된 값들 처리, 값들은 req로 받았고 vars에 저장됨 
router.post('/', async(req, res) => {
    const vars = req.body;
    var dt= new Date(vars.leg_date);
    var str = dt.getFullYear()+'-'+(dt.getMonth()+1)+'-'+dt.getDate();
    
    const data = { 
        Flight_Number: vars.flight_number,
        Leg_Number: vars.leg_number,
        Leg_Date: str,
        NO_OF_AVAILABLE_SEATS: vars.no_of_available_seats,
        Airplane_Id: vars.airplane_id,
        DEPARTURE_TIME: vars.departure_time,
        ARRIVAL_TIME: vars.arrival_time,
    };
    insertSql.setinstance(data); 

    res.redirect('/admin/flight'); 
})

module.exports = router;