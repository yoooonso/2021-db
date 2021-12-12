// Router을 사용하기 위해 express를 불러오고 
// database/sql로 부터 selectSql(삭제위해 데이터 조회), deleteSql모델 사용
import express from "express";
import {selectSql, deleteSql} from "../database/sql";

const router = express.Router();

router.get('/', async (req, res) => {
    const airplane = await selectSql.getairplane();
    
    res.render('airplane_delete', {
        title: "airplane 데이터 삭제",
        airplane
    });
});

// 삭제 버튼을 눌렀을 경우 delete query를 실행
router.post('/', async (req, res) => {
    const vars = req.body;

    const data ={
        Airplane_Id: vars.delBtn,
    }
    await deleteSql.deleteairplane(data);
   
    res.redirect('/admin/airplane'); 
});

module.exports = router;