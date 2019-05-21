let orm = require('../config/orm.js');

let burger = {
    all: (cb) => {
        orm.all('burgers', (res) => {
            cb(res);
        });
    },
    create: (vals, cb) => {
        orm.create('burgers', ['burger_name'], vals, (res) => {
            cb(res);
        });
    },
    update: (objColVals, condition, cb) => {
        orm.update('burgers', objColVals, condition, (res) => {
            cb(res);
        });
    },
    delete: (condition, cb) => {
        orm.delete('burgers', condition, (res) => {
            cb(res);
        });
    }
};

module.exports = burger;