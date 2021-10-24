// Router을 사용하기 위해 express를 불러오고 
// database/sql로 부터 insertSql모델 사용 
import express from "express";
import { insertSql} from "../database/sql";

const router = express.Router();

router.get('/',(req, res) => {
    res.render('home');
});

// post에서 삽입된 값들 처리, 값들은 req로 받았고 vars에 저장됨 
router.post('/', (req, res) => {
    const vars = req.body;
    const var_lenth = Object.keys(req.body).length; // 넘겨지는 데이터수를 var_lenth로 저장

    // var_lenth가 4보다 크면 employee 데이터고 
    if (var_lenth > 4) {
        const data = { // employee의 값을 받아서 data 객체를 만듦
            Fname: vars.fname,
            Minit: vars.minit,
            Lname: vars.lname,
            Ssn: vars.ssn,
            Bdate: vars.bdate,
            Address: vars.address,
            Sex: vars.sex,
            Salary: vars.salary,
            Super_ssn: vars.super_ssn,
            Dno: vars.dno
        };
        //데이터를 넘겨줘서 setEmployee 실행, insert문
        insertSql.setEmployee(data); // updateSql의 setEmployee함수로 data를 넘김 
    } else { //작으면 department 데이터
        const data = { // department의 값을 받아서 data 객체를 만듦
            Dname: vars.dname,
            Dnumber: vars.dnumber,
            Mgr_ssn: vars.mgr_ssn,
            Mgr_start_date: vars.mgr_start_date
        };
        //데이터를 넘겨줘서 setDepartment 실행, insert문
        insertSql.setDepartment(data); //setDepartment로 data를 넘김
    }

    res.redirect('/'); // 같은 home화면으로 redirect
})

module.exports = router;