// Router을 사용하기 위해 express를 불러오고 
// database/sql로 부터 selectSql(수정위해 데이터 조회), UpdateSql모델 사용
import express from "express";
import {selectSql, updateSql} from "../database/sql";

const router = express.Router();

// 데이터 수정을 위해 SelectSql의 getEmployee() 함수로 
//employee와 department의 전체 테이블을 emp_res와 dept_res의 이름으로 불러온다

// 기존의 입력 값 불러오기 /employee == /update/employee
router.get('/', async (req, res) => {
    const airport = await selectSql.getairport();
    res.render('airport_modify', {
        title: "airport 데이터 갱신",
        airport
    });
});

// 수정 버튼을 눌렀을 경우 update query를 실행하면 조회 페이지로 이동
router.post('/', async (req, res) => {
    const vars = req.body; // 변수를 받음
   
    const data = { 
        Airport_Code: vars.airport_code,
        Airport_Name: vars.airport_name,
        City: vars.city,
        State: vars.state,
    }
    await updateSql.updateairport(data);

    res.redirect('/admin/airport'); 
});

module.exports = router;