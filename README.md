# 2021-db
- 데이터베이스 설계
<br><br>

## 3주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@git@github.com:yoooonso/2021-db.git
    - (token을 사용하는 경우) git clone https://github.com/yoooonso/2021-db.git
2. week_3 폴더로 이동
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

7. 테이블
    - **user**

    Name|StudentNumber|Major|Class|DateofEnter|Email
    ---|---|---|---|---|---|
    윤소영|12191793|정보통신공학과|3|2019-03-01|소영@gmail.com
    김철수|12345678|정보통신공학과|4|2012-03-01|철수@gmail.com
    홍길동|87654321|정보통신공학과|1|2021-03-01|길동@gmail.com
    

## 8주차 실습 실행 방법
1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@git@github.com:yoooonso/2021-db.git
    - (token을 사용하는 경우) git clone https://github.com/yoooonso/2021-db.git
2. week_8 폴더로 이동
    > cd week_8
3. 큰솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력 (주석 부분)
5. 서버 실행(powershell에서) 후 확인
    - npm run start
    - 브라우저를 켜서 주소창에 localhost:3000 입력
6. 기본 화면 
    - localhost:3000으로 들어가면 기본 화면, employee 혹은 department 데이터 삽입을 위한 form (DB와 연결해 테이블 삽입)
    - localhost:3000/select로 들어가면 DB에 있는 테이블 값을 불러와서 출력
    - locathost:3000/update로 들어가면 조건에 만족하는 employee의 salary와 department의 dname의 값 수정
7. 테이블
    - db연결 후 localhost:3000(홈)에서 값들을 입력해 Employee, Department 테이블을 추가할 수 있다.

    - **Employee**

    Fname|Minit|Lname|Ssn|Bdate|Address|Sex|Salary|Super_ssn|Dno
    ---|---|---|---|---|---|---|---|---|---|
    John|B|Smith|123456789|1975-01-09|731 Fordren|M|300000|333445555|5
    Fraklin|E|Wong|333445555|1965-12-08|638 Voss|M|40000|888665555|5
    James|E|Borg|888665555|1375-11-19|450 Stone|M|50000|NULL|1
    Jennifer|S|Wallace|987654321|1951-06-20|291 Berry|F|43000|888665555|4

    - **Department**
   
    Dname|Dnumber|Mgr_ssn|Mgr_start_date
    ---|---|---|---|
    Headquarters|1|888665555|1981-06-19
    Administration|4|987654321|1995-01-01
    Research|5|333445555|1988-05-22


## 10주차 실습 실행 방법

1. 레포지토리 복사(wsl 환경에서 명령어 입력)
    - (SSH 설정한 경우) git clone git@git@github.com:yoooonso/2021-db.git
    - (token을 사용하는 경우) git clone https://github.com/yoooonso/2021-db.git
2. week_10 폴더로 이동
    > cd week_10
3. 큰솔창(powershell)에서 npm package 설치
    > npm install
4. database/sql.js에서 본인의 데이터베이스 정보 입력 (주석 부분)
5. 서버 실행(powershell에서) 후 확인
    - npm run start
    - 브라우저를 켜서 주소창에 localhost:3000 입력
6. 기본 화면 
    - localhost:3000으로 들어가면 로그인 화면으로 id와 password를 입력하여 로그인(DB와 연결해 일치하는 user 확인)
    - localhost:3000/select로 들어가면 DB에 있는 테이블 값을 불러와서 출력
    - locathost:3000/delete로 들어가면 조건에 만족하는 department의 값 혹은 course 값 삭제
7. 테이블
    - db 연결 후, user 테이블은 로그인 페이지에서, user의 id, password가 일치하는 user가 있으면 로그인이 되고, 없으면 실패했다는 에러 메세지를 띄움. 로그인에 성공하면 user의 role이 admin인지 users인지 구별하여, select 혹은 delete 페이지로 redirect한다.
    - db연결 후 localhost:3000/select에서 department, course 테이블을 조회하고 localhost:3000/delete에서 삭제할 수 있다. (삭제는 Cnumber 혹은 Dnumber와 일치하는 조건에 맞는 정보를 삭제)
    
    - **user**

    Id|password|Role
    ---|---|---
    admin|admin1234|admin
    test|test1234|users

    - **department**
   
    Dname|Dnumber|
    ---|---
    전기공학과|2
    전자공학과|3
    정보통신공학과|0
    컴퓨터공학과|1

    - **course**

    Cname|Cnumber|Ctime
    |---|---|---
    OS|101|3
    DB|201|4
    Graphics|303|4
    Network|402|3
    Security|501|3

## <span style="color:red">테이블 작성법</span>

이름|과|전공|학번
---|---|---|---|
김영희|정보통신공학과|정보통신|12201111|
홍길동|컴퓨터공학과|데이터베이스|12191111
이순신|인공지능학과|인공지능|12181111

## 텍스트 강조

- **데이터베이스** 실습은 재미 ~~없어요~~있어요.