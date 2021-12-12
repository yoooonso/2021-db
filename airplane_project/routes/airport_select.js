// Router을 사용하기 위해 express를 불러오고 
// database/sql로 부터 selectSql모델 사용
import express from "express";
import {selectSql} from "../database/sql";

const router = express.Router();

router.get('/', async function(req, res){
    const airport = await selectSql.getairport();

    res.render('airport_select', {
        title: 'AIRPORT',
        airport
    });
});

module.exports = router;