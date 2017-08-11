var mysql = require('../common/mysql');
var NewRepository = (function () {
    function NewRepository() {
        console.log('-------------NewRepository------------------');
        console.log('mysql ', mysql);
    }
    NewRepository.prototype.findById = function (id, callback) {
        return mysql.getConnection(function (conn) {
            return conn.queryAsync("\n        SELECT\n          *\n        FROM\n          news\n        WHERE\n        id = :idr\n      ", { idr: 1 }).then(function (rows) {
                console.log('rows ', rows);
                return rows;
            });
        });
    };
    ;
    return NewRepository;
})();
module.exports = NewRepository;
//# sourceMappingURL=NewRepository.js.map