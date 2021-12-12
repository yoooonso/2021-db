// Router을 사용하기 위해 express를 불러오고 
// database/sql로 부터 selectSql모델 사용
import express from "express";
import {selectSql} from "../database/sql";

const router = express.Router();

router.get('/', async function(req, res){
    const flight = await selectSql.getflight();
    const flight_leg = await selectSql.getflightleg();
    const leg_instance = await selectSql.getleginstance();
    res.render('flight_select', {
        title: 'FLIGHT',
        title2: 'FLIGHT LEGS',
        title3: 'LEG INSTANCE',
        flight,
        flight_leg,
        leg_instance,
    });
});

module.exports = router;