# 2021-db
- 데이터베이스 설계

## 3주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@git@github.com:yoooonso/2021-db.git
    - (token을 사용하는 경우) git clone https://github.com/yoooonso/2021-db.git
2. week_e 폴더로 이동
    > cd week_3
3. 큰솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력 (주석 부분)
<pre>
<code>
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'db_yoooonso', // 본인의 mysql user id
    database: 'dbdesign', // 본인이 만든 데이터베이스 이름
    password: 'db_yoooonso!', // 본인의 mysql password
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  }
);
</code>
</pre>
<br>

5. 서버 실행(powershell에서) 후 확인
    - npm run start
    - 브라우저를 켜서 주소창에 localhost:3000 입력

6. 기본 화면 
    - localhost:3000으로 들어가면 기본 화면
    - (데이터베이스 설정이 된 경우) localhost:3000/users로 들어가면 DB에 있는 값을 불러와서 출력

## 8주차 실습 실행 방법
## 3주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@git@github.com:yoooonso/2021-db.git
    - (token을 사용하는 경우) git clone https://github.com/yoooonso/2021-db.git
2. week_e 폴더로 이동
    > cd week_8
3. 큰솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력 (주석 부분)
5. 서버 실행(powershell에서) 후 확인
    - npm run start
    - 브라우저를 켜서 주소창에 localhost:3000 입력


## <span style="color:red">테이블 작성법</span>

이름|과|전공|학번
---|---|---|---|
김영희|정보통신공학과|정보통신|12201111|
홍길동|컴퓨터공학과|데이터베이스|12191111
이순신|인공지능학과|인공지능|12181111

## 텍스트 강조

- **데이터베이스** 실습은 재미 ~~없어요~~있어요.