// Router을 사용하기 위해 express를 불러오고 
// database/sql로 부터 selectSql(수정위해 데이터 조회), UpdateSql모델 사용
import express from "express";
import {selectSql, updateSql} from "../database/sql";

const router = express.Router();

// 데이터 수정을 위해 SelectSql의 getEmployee() 함수로 
//employee와 department의 전체 테이블을 emp_res와 dept_res의 이름으로 불러온다

// 기존의 입력 값 불러오기 /employee == /update/employee
router.get('/employee', async (req, res) => {
    const emp_res = await selectSql.getEmployee();
    res.render('updateEmployee', {
        title: "직원 테이블 갱신",
        emp_res
    });
});

// 기존의 입력 값 불러오기 /department == /update/department
router.get('/department', async (req, res) => {
    const dept_res = await selectSql.getDepartment();
    res.render('updateDepartment', {
        title: "부서 테이블 갱신",
        dept_res
    });
});

// 수정 버튼을 눌렀을 경우 update query를 실행하면 조회 페이지로 이동
router.post('/employee', async (req, res) => {
    const vars = req.body; // 변수를 받음
    console.log(vars.salary);
    
    const data = { // 수정할 salary를 받아서 data 객체를 만듦
        Salary: vars.salary
    }
    await updateSql.updateEmployee(data);
    // updateSql의 updateEmployee함수로 data를 넘김 

    res.redirect('/select'); // localhost:3000/select 화면으로 넘어가 바꾼값 조회함
});

// 수정 버튼을 눌렀을 경우 update query를 실행하여 조회 페이지로 이동
router.post('/department', async (req, res) => {
    const vars = req.body; // 변수를 받음
    console.log(vars.dname);
    
    const data = {// 수정할 dname를 받아서 data 객체를 만듦
        Dname: vars.dname
    }
    await updateSql.updateDepartment(data);
    // updateSql의 updateDepartment함수로 data를 넘김 

    res.redirect('/select'); // localhost:3000/select 화면으로 넘어가 바꾼값 조회함
});

module.exports = router;
