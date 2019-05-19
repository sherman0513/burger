let connection = require('../config/connection.js');

selectAll()
insertOne()
updateOne()

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
    selectAll: (tableInput, callback) => {
        let queryString = 'select * from' + tableInput + ';';
        connection.query(queryString, (error, result) => {
            if (error) {
                throw error
            };
            callback(result)
        })
    },
    insertOne: () => {

    },
    updateOne: () => {

    }
}