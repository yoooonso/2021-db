// import로 각 모듈을 불러온다
// path는 경로 설정시 쓰는 모듈 
import express from "express";
import logger from "morgan";
import path from "path"; 

// 파일의 경로로 home.js update.js select.js를 불러온다
// homeRouter은 홈화면, updateRouter는 수정, select는 조회에 관련된 가능을 담당
import loginRouter from "../routes/login";

import aiportRouter from "../routes/airport_select";
import airportinsertRouter from "../routes/airport_insert";
import airportmodifyRouter from "../routes/airport_modify";
import airportdeleteRouter from "../routes/airport_delete";

import aiplaneRouter from "../routes/airplane_select";
import airplaneinsertRouter from "../routes/airplane_insert";
import airplanemodifyRouter from "../routes/airplane_modify";
import airplanedeleteRouter from "../routes/airplane_delete";

import flightRouter from "../routes/flight_select";
import flightinsertRouter from "../routes/flight_insert";
import flightmodifyRouter from "../routes/flight_modify";
import flightdeleteRouter from "../routes/flight_delete";

import reserveRouter from "../routes/reserve_select";
import reserveinsertRouter from "../routes/reserve_insert";
import reservedeleteRouter from "../routes/reserve_delete";

const PORT = 3000; // PORT번호는 3000으로 설정

// app이라는 이름으로 express기능을 사용
const app = express(); 

app.use(express.urlencoded({extended: false}));
app.use(express.json()); // 데이터를 웹에서 다루기 편하게 

app.set('views', path.join(__dirname, '../views'))
app.set('view engine','hbs') //hbs 파일 사용

app.use(logger("dev")); 

// 라우터 주소 설정
app.use('/', loginRouter); // 홈화면
app.use('/admin/airport', aiportRouter); //조회
app.use('/admin/airport/insert', airportinsertRouter); // 삽입
app.use('/admin/airport/modify', airportmodifyRouter); // 수정
app.use('/admin/airport/delete', airportdeleteRouter); // 삭제
app.use('/admin/airplane', aiplaneRouter); //조회
app.use('/admin/airplane/insert', airplaneinsertRouter); // 삽입
app.use('/admin/airplane/modify', airplanemodifyRouter); // 수정
app.use('/admin/airplane/delete', airplanedeleteRouter); // 삭제
app.use('/admin/flight', flightRouter); //조회
app.use('/admin/flight/insert', flightinsertRouter); // 삽입
app.use('/admin/flight/modify', flightmodifyRouter); // 수정
app.use('/admin/flight/delete', flightdeleteRouter); // 삭제
app.use('/user/reserve', reserveRouter) // 조회
app.use('/user/reserve/insert', reserveinsertRouter); // 삽입
app.use('/user/reserve/delete', reservedeleteRouter); // 삭제

// 서버를 실행시킴 
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

