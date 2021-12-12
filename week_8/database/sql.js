import mysql from "mysql2";

// 데이터 베이스 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week8',
        password: 'yoooonso!',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

// async / await 사용 (동기화)
const promisePool = pool.promise();

// export가 있어야 다른 파일에서 함수를 쓸 수 있음
// select query, employee, department를 조회하는 select query문을 작성하고 return에서 넘겨줌
export const selectSql = {
    getEmployee : async () => {
        const [rows] = await promisePool.query(`select * from employee`);
        console.log(rows)
        return rows
    },
    getDepartment : async () => {
        const [rows] = await promisePool.query(`select * from department`);
        return rows
    },
}

// insert query
export const insertSql = {
    // data라는 객체 타입의 파라미터에 입력할 정보를 받아서 insert query문 생성
    setEmployee : async (data) => {
        const sql = `insert into employee values(
            "${data.Fname}", "${data.Minit}", "${data.Lname}", "${data.Ssn}", "${data.Bdate}", 
            "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}" )`;
        await promisePool.query(sql); // sql실행 
    },

    setDepartment : async (data) => {
        const sql = `insert into department values (
            "${data.Dname}", "${data.Dnumber}", "${data.Mgr_ssn}", "${data.Mgr_start_date}")`;
        await promisePool.query(sql);
    },
}

// update query, update.js로 부터 데이터를 넘겨 받아 update query에 사용
export const updateSql = {
    updateEmployee : async (data) => {
        // where 조건(Minit이 "F"인)을 만족하는 행에 대해서 salary 수정
        const sql = `update employee set Salary = "${data.Salary}" where Ssn="${data.Ssn}"`;
        await promisePool.query(sql);
    },

    updateDepartment : async (data) => {
        // where 조건(Dnumber가 4인)을 만족하는 행에 대해서 Dname 수정
        const sql = `update department set dname = "${data.Dname}" where Dnumber = 4`;
        await promisePool.query(sql);
    },
}