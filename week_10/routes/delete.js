// Router을 사용하기 위해 express를 불러오고 
// database/sql로 부터 selectSql(삭제위해 데이터 조회), deleteSql모델 사용
import express from "express";
import {selectSql, deleteSql} from "../database/sql";

const router = express.Router();

// 데이터 삭제를 위해 SelectSql의 getDempartmet(), getCourse() 함수로 
// department와 course의 전체 테이블을 department와 course의 이름으로 불러온다
// 기존의 입력 값 불러오기 / == /delete
router.get('/', async (req, res) => {
    const department = await selectSql.getDepartment();
    const course = await selectSql.getCourse();

    res.render('delete', {
        title: "삭제 기능",
        department,
        course
    });
});


// 삭제 버튼을 눌렀을 경우 delete query를 실행
router.post('/', async (req, res) => {
    const vars = req.body;
    
    if(vars.delBtn < 100){ // vars.delBtn의 범위로 department, course구분
        const data = {// 삭제할 데이터의 Dnumber를 받아서 data 객체를 만듦
            Dnumber: vars.delBtn,
        }
        await deleteSql.deleteDepartment(data);
        //deleteSql의 deleteDepartment함수로 data를 넘김 
    }
    else { // vars.name이 delBtn2인 경우
        const data = {// 삭제할 데이터의 Cnumber를 받아서 data 객체를 만듦
            Cnumber: vars.delBtn,
        }
        await deleteSql.deleteCourse(data);
        // deleteSql의 deleteCourse함수로 data를 넘김 
    }

    res.redirect('/delete'); // localhost:3000/delete 화면으로 넘어가 바꾼값 조회함
});

module.exports = router;
