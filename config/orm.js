let connection = require('../config/connection.js');

function printQuestionMarks(num) {
    let arr = [];

    num.forEach(() => {
        arr.push('?');
    });

    return arr.toString();
}

function objectToSql(obj) {
    let arr = [];

    for (let key in obj) {
        if (Object.hasOwnPropert.call(obj, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + '=' + value);
        }
    }
    return arr.toString();
}


let orm = {
    all: (table, cb) => {
        let queryString = 'SELECT * FROM ' + table + ';';
        connection.query(queryString, (error, result) => {
            if (error) {
                throw error;
            }
            // console.log(result);
            cb(result);
        });
    },
    create: (table, cols, vals, cb) => {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        connection.query(queryString, vals, (error, result) => {
            if (error) {
                throw error;
            }
            cb(result);
        });
    },
    update: (table, objColVals, condition, cb) => {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objectToSql(objColValfs);
        queryString += " WHERE ";
        queryString += condition;
        
        connection.query(queryString, (error, result) => {
            if (error) {
                throw error;
            }
            cb(result);
        });
    },
    delete: (table, condition, cb) => {
        let queryString = 'DELETE FROM ' + table;

        queryString += 'WHERE';
        queryString += condition;

        connection.query(queryString, (error, result) => {
            if (error) {
                throw error;
            }
            cb(result);
        });
    }
};

module.exports = orm;

