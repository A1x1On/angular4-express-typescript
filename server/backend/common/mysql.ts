const mysql    = require('mysql');
const bluebird = require('bluebird');
const _        = require('lodash');
const config   = require('../../config').config().dbconnection;

bluebird.promisifyAll(mysql);
bluebird.promisifyAll(require('mysql/lib/Connection').prototype);
bluebird.promisifyAll(require('mysql/lib/Pool').prototype);


console.log('config ', config);


const pool = mysql.createPool(_.assign({}, config, {
  queryFormat: function (query, values) {
    if (!values) return query;
    return query.replace(/\:(\w+)/g, function (txt, key) {
      if (values.hasOwnProperty(key)) {
        return this.escape(values[key]);
      }
      return txt;
    }.bind(this))
  }
}));

  function getConnection(handler) {
    return bluebird.using(
      pool.getConnectionAsync().disposer((connection) => connection.release()),
      handler
    );
  };


export = {getConnection: getConnection};


