// Router을 사용하기 위해 express를 불러오고 
// database/sql로 부터 selectSql(수정위해 데이터 조회), UpdateSql모델 사용
import express from "express";
import {selectSql, updateSql} from "../database/sql";

const router = express.Router();

router.get('/', async (req, res) => {
    const airplane = await selectSql.getairplane();
    res.render('airplane_modify', {
        title: "airplane 데이터 갱신",
        airplane
    });
});

// 수정 버튼을 눌렀을 경우 update query를 실행하면 조회 페이지로 이동
router.post('/', async (req, res) => {
    const vars = req.body; // 변수를 받음
   
    const data = { 
        Airplane_Id: vars.airplane_id,
        TOTAL_NUMBER_OF_SEATS: vars.total_number_of_seats,
        Airplane_Type: vars.airplane_type,
    }
    await updateSql.updateairplane(data);

    res.redirect('/admin/airplane'); 
});

module.exports = router;