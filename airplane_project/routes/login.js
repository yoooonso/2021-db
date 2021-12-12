// Router을 사용하기 위해 express를 불러오고 
// database/sql로 부터 insertSql모델 사용 
import express from "express";
import { selectSql } from "../database/sql";

const router = express.Router();

router.get('/',(req, res) => {
    res.render('login');
});

// post에서 삽입된 값들 처리, 값들은 req로 받았고 vars에 저장됨 
router.post('/', async (req, res) => {
    const vars = req.body;  //input한 값을 vars에 저장, object타입
    const users = await selectSql.getUsers();
    let whoAmI = '' //값을 바꿀 수 있는 변수를 쓸때 let을 씀, const는 고정
    let checkLogin = false; //로그인을 했는지

    users.map((user) => {
        if(vars.id === user.Id && vars.password === user.Password){
            checkLogin = true;
            if(user.Role === 'admin'){
                whoAmI = 'admin';
            } else {
                whoAmI = 'user';
            }
        }
    })

    if(checkLogin && whoAmI === 'admin'){
        res.redirect('/admin/airport');
    } else if (checkLogin && whoAmI === 'user') {
        res.redirect('/user/reserve');
    } else { // 둘다 아닌경우, alert메세지, 경고창을 띄운다
        res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>")
    }
})

module.exports = router;