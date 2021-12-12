// import로 각 모듈을 불러온다
// path는 경로 설정시 쓰는 모듈 
import express from "express";
import logger from "morgan";
import path from "path"; 

// 파일의 경로로 login.js update.js select.js를 불러온다
// homeRouter은 홈화면, updateRouter는 수정, select는 조회에 관련된 가능을 담당
import homeRouter from "../routes/login";
import updateRouter from "../routes/update";
import selectRouter from "../routes/select";

const PORT = 3000; // PORT번호는 3000으로 설정

// app이라는 이름으로 express기능을 사용
const app = express(); 

app.use(express.urlencoded({extended: false}));
app.use(express.json()); // 데이터를 웹에서 다루기 편하게 

app.set('views', path.join(__dirname, '../views'))
app.set('view engine','hbs') //hbs 파일 사용

app.use(logger("dev")); 

// 라우터 주소 설정
app.use('/', homeRouter); // 홈화면
app.use('/update', updateRouter); // 수정
app.use('/select', selectRouter); // 조회

// 서버를 실행시킴 
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

