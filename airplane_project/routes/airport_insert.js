// Router을 사용하기 위해 express를 불러오고 
// database/sql로 부터 insertSql모델 사용 
import express from "express";
import { insertSql} from "../database/sql";

const router = express.Router();

router.get('/', async(req, res) => {
    res.render('airport_insert');
});

// post에서 삽입된 값들 처리, 값들은 req로 받았고 vars에 저장됨 
router.post('/', async(req, res) => {
    const vars = req.body;
    const data = { 
        Airport_Code: vars.airport_code,
        Airport_Name: vars.airport_name,
        City: vars.city,
        State: vars.state,
    };
    insertSql.setairport(data); 

    res.redirect('/admin/airport'); 
})

module.exports = router;