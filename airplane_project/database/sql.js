import mysql from "mysql2";

// 데이터 베이스 연결
const pool = mysql.createPool(
    process.env.JAWSDB_URL ?? {
        host: 'localhost',
        user: 'root',
        database: 'airplane_db',
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
    getUsers : async () => {
        const [rows] = await promisePool.query(`select * from user`);
        return rows
    },
    getairport : async () => {
        const [rows] = await promisePool.query(`select * from airport`);
        return rows
    },
    getairplanetype : async () => {
        const [rows] = await promisePool.query(`select * from airplane_type`);
        return rows
    },
    getairplane : async () => {
        const [rows] = await promisePool.query(`select * from airplane`);
        return rows
    },
    getflight : async () => {
        const [rows] = await promisePool.query(`select * from flight`);
        return rows
    },
    getflightleg : async () => {
        const [rows] = await promisePool.query(`select * from flight_leg`);
        return rows
    },
    getleginstance : async () => {
        const [rows] = await promisePool.query(`select * from leg_instance`);
        return rows
    },
    getreserveview : async () => {
        const [rows] = await promisePool.query(`select * from reservation_view`);
        return rows
    },
    getreserveview_id : async (data) => {
        const [rows] = await promisePool.query(`select * from reservation_view 
        where Customer_ID="${data.Customer_Id}"`);
        return rows
    },
    getflightview : async () => {
        const [rows] = await promisePool.query(`select * from flight_view`);
        return rows
    },
    getfares : async () => {
        const [rows] = await promisePool.query(`select * from fares`);
        return rows
    },
}

// insert query
export const insertSql = {
    // data라는 객체 타입의 파라미터에 입력할 정보를 받아서 insert query문 생성
    setairport : async (data) => {
        const sql = `insert into airport values(
            "${data.Airport_Code}", "${data.Airport_Name}", "${data.City}", "${data.State}")`; 
        await promisePool.query(sql); // sql실행 
    },
    setairplane : async (data) => {
        const sql = `insert into airplane values(
            "${data.Airplane_Id}", "${data.TOTAL_NUMBER_OF_SEATS}", "${data.Airplane_Type}")`; 
        await promisePool.query(sql); // sql실행 
    },
    setinstance : async (data) => {
        const sql = `insert into leg_instance values(
            "${data.Flight_Number}", "${data.Leg_Number}", "${data.Leg_Date}", "${data.NO_OF_AVAILABLE_SEATS}",
            "${data.Airplane_Id}", "${data.DEPARTURE_TIME}","${data.ARRIVAL_TIME}")`; 
        await promisePool.query(sql); // sql실행 
    },
    setseatreservation : async (data) => {
        const sql = `insert into seat_reservation values(
            "${data.Flight_Number}", "${data.Leg_Number}", "${data.Leg_Date}", "${data.Seat_Number}",
            "${data.Customer_Id}")`; 
        await promisePool.query(sql); // sql실행 
    },
}

// update query, update.js로 부터 데이터를 넘겨 받아 update query에 사용
export const updateSql = {
    updateairport : async (data) => {
        const sql = `update airport set Airport_Name="${data.Airport_Name}", City="${data.City}", State="${data.State}" 
        where Airport_Code ="${data.Airport_Code}"`;
        await promisePool.query(sql);
    },
    updateairplane : async (data) => {
        const sql = `update airplane set TOTAL_NUMBER_OF_SEATS="${data.TOTAL_NUMBER_OF_SEATS}", 
        Airplane_Type="${data.Airplane_Type}" where Airplane_Id ="${data.Airplane_Id}"`;
        await promisePool.query(sql);
    },
    updateinstance : async (data) => {
        const sql = `update leg_instance set NO_OF_AVAILABLE_SEATS="${data.NO_OF_AVAILABLE_SEATS}",
        Airplane_Id="${data.Airplane_Id}", DEPARTURE_TIME="${data.DEPARTURE_TIME}", ARRIVAL_TIME="${data.ARRIVAL_TIME}"
        where Flight_Number="${data.Flight_Number}" AND Leg_Number="${data.Leg_Number}" AND Leg_Date="${data.Leg_Date}"`;
        await promisePool.query(sql);
    },
    updateseatdecrease : async (data) => {
        const sql = `update leg_instance set NO_OF_AVAILABLE_SEATS= NO_OF_AVAILABLE_SEATS-1
        where Flight_Number="${data.Flight_Number}" AND Leg_Number="${data.Leg_Number}" AND Leg_Date="${data.Leg_Date}"`;
        await promisePool.query(sql);
    },
    updateseatincrease : async (data) => {
        const sql = `update leg_instance set NO_OF_AVAILABLE_SEATS= NO_OF_AVAILABLE_SEATS+1
        where Flight_Number="${data.Flight_Number}" AND Leg_Number="${data.Leg_Number}" AND Leg_Date="${data.Leg_Date}"`;
        await promisePool.query(sql);
    },
}

// delete query, delete.js로 부터 데이터를 넘겨 받아 delete query에 사용
export const deleteSql = {
    deleteairport : async (data) => {
        const sql = `delete from airport where Airport_Code="${data.Airport_Code}"`;
 
        await promisePool.query(sql);
    },
    deleteairplane : async (data) => {
        const sql = `delete from airplane where Airplane_Id="${data.Airplane_Id}"`;
        await promisePool.query(sql);
    },
    deleteinstance : async (data) => {
        const sql = `delete from leg_instance where Flight_Number="${data.Flight_Number}" AND
        Leg_Number="${data.Leg_Number}" AND Leg_Date="${data.Leg_Date}"`;
    
        await promisePool.query(sql);
    },
    deletereserve : async (data) => {
        const sql = `delete from seat_reservation where Flight_Number="${data.Flight_Number}" AND
        Leg_Number="${data.Leg_Number}" AND Leg_Date="${data.Leg_Date}" AND Seat_Number="${data.Seat_Number}"`;
    
        await promisePool.query(sql);
    },
}
