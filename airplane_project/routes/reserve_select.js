// Router을 사용하기 위해 express를 불러오고 
// database/sql로 부터 selectSql모델 사용
import express from "express";
import {selectSql} from "../database/sql";

const router = express.Router();

router.get('/', async function(req, res){
    const reserve = await selectSql.getreserveview();
   
    res.render('reserve_select', {
        title: 'SEAT RESERVATION',
        reserve,
    });
});

router.post('/', async(req, res) => {
    const vars = req.body;
    
    const data = {
        Customer_Id: vars.customer_id
    }
    const reserve = await selectSql.getreserveview();
    const each_reserve = await selectSql.getreserveview_id(data);
    res.render('reserve_select',{
        title: 'SEAT RESERVATION',
        reserve,
        each_reserve
    });
})

module.exports = router;