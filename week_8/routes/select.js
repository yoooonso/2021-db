// Router을 사용하기 위해 express를 불러오고 
// database/sql로 부터 selectSql모델 사용
import express from "express";
import {selectSql} from "../database/sql";

const router = express.Router();

// '/' == '/select'
router.get('/', async function(req, res){
    // selectSql getEmployee, getDepartment를 불러서 employee, Department에 저장
    const employee = await selectSql.getEmployee();
    const department = await selectSql.getDepartment();

    // select.hbs로 employee, department 테이블 데이터를 넘겨줌
    res.render('select', {
        title: '직원 테이블',
        title2: '부서 테이블',
        employee,
        department
    });
});

module.exports = router;