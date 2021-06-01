const connection = require("../../connection");

async function queryDB(query, data = []) {
    return new Promise((resolve, reject) => { 
        connection.query(
            query,
            data,
            (error, results) => {
                if (error) { reject(error); }
                resolve(results);
            }
        );
    })
}

module.exports = queryDB;