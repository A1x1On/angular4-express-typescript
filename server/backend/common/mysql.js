var mysql = require('mysql');
var bluebird = require('bluebird');
var _ = require('lodash');
var config = require('../../config').config().dbconnection;
bluebird.promisifyAll(mysql);
bluebird.promisifyAll(require('mysql/lib/Connection').prototype);
bluebird.promisifyAll(require('mysql/lib/Pool').prototype);
console.log('config ', config);
var pool = mysql.createPool(_.assign({}, config, {
    queryFormat: function (query, values) {
        if (!values)
            return query;
        return query.replace(/\:(\w+)/g, function (txt, key) {
            if (values.hasOwnProperty(key)) {
                return this.escape(values[key]);
            }
            return txt;
        }.bind(this));
    }
}));
function getConnection(handler) {
    return bluebird.using(pool.getConnectionAsync().disposer(function (connection) { return connection.release(); }), handler);
}
;
module.exports = { getConnection: getConnection };
//# sourceMappingURL=mysql.js.map