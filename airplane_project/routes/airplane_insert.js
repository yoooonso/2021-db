// Router을 사용하기 위해 express를 불러오고 
// database/sql로 부터 insertSql모델 사용 
import express from "express";
import { selectSql, insertSql} from "../database/sql";

const router = express.Router();

router.get('/', async(req, res) => {
    const airplane_type = await selectSql.getairplanetype();
    res.render('airplane_insert', {
        title: 'AIRPLANE TYPE',
        airplane_type,
    });
});
// post에서 삽입된 값들 처리, 값들은 req로 받았고 vars에 저장됨 
router.post('/', async(req, res) => {
    const vars = req.body;

    const data = { 
        Airplane_Id: vars.airplane_id,
        TOTAL_NUMBER_OF_SEATS: vars.total_number_of_seats,
        Airplane_Type: vars.airplane_type,
    };
    insertSql.setairplane(data); 

    res.redirect('/admin/airplane'); 
})

module.exports = router;