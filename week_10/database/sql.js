import mysql from "mysql2";

// 데이터 베이스 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'week10',
        password: 'yoooonso!',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
);

// async / await 사용 (동기화)
const promisePool = pool.promise();

// export가 있어야 다른 파일에서 함수를 쓸 수 있음
// select query, user, department, course를 조회하는 select query문을 작성하고 return에서 넘겨줌
export const selectSql = {
    getUsers : async () => {
        const [rows] = await promisePool.query(`select * from user`);
       
        return rows
    },
    getDepartment : async () => {
        const [rows] = await promisePool.query(`select * from department`);
        return rows
    },
    getCourse : async () => {
        const [rows] = await promisePool.query(`select * from course`);
        return rows
    },
}


// delete query, delete.js로 부터 데이터를 넘겨 받아 delete query에 사용
export const deleteSql = {
    deleteDepartment : async (data) => {
        // where 조건(넘겨받은 데이터의 Dnumber과 일치하는)을 만족하는 행에 대해서 삭제
        console.log('deleteSql.deleteDepartment: ', data.Dnumber);
        const sql = `delete from department where Dnumber="${data.Dnumber}"`;
 
        await promisePool.query(sql);
    },
    deleteCourse : async (data) => {
        // where 조건(넘겨받은 데이터의 Cnumber과 일치하는)을 만족하는 행에 대해서 삭제
        console.log('deleteSql.deleteCourse: ', data.Cnumber);
        const sql = `delete from Course where Cnumber="${data.Cnumber}"`;
 
        await promisePool.query(sql);
    },
}