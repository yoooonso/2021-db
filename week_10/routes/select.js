// Router을 사용하기 위해 express를 불러오고 
// database/sql로 부터 selectSql모델 사용
import express from "express";
import {selectSql} from "../database/sql";

const router = express.Router();

// '/' == '/select'
router.get('/', async function(req, res){
    // selectSql의 getDepartment,getCourse를 불러서 employee, Department에 저장
    const department = await selectSql.getDepartment();
    const course = await selectSql.getCourse(); 
    // select.hbs로 department, course 테이블 데이터를 넘겨줌
    res.render('select', {
        title: 'IT 공대',
        department,
        title2: '정보통신공학과 강의',
        course
    });
});

module.exports = router;