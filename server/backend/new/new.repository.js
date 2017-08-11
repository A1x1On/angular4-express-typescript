// module.exports = (function () {
//   'use strict';
//
//   const _        = require('lodash');
//   const bluebird = require('bluebird');
//   const moment   = require('moment');
//   //const mysqll    = require('../common/mysql');
//
//
//   const mysql    = require('mysql');
//   const config   = require('../../server/config').config().dbconnection;
//
//
//   // ---
//
//   console.log('config ', config);
//
//
//   const pool = mysql.createPool(config);
//
//   function getConnection(handler) {
//     return bluebird.using(
//       pool.getConnectionAsync().disposer((connection) => connection.release()),
//       handler
//     );
//   };
//
//
//   function removeSID(criteria){
//
//     return getConnection((conn) => {
//       return conn.queryAsync(`SELECT * FROM new`).then((rows) => {
//
//
//         console.log('-------------------------------');
//         console.log(rows);
//         return rows
//       });
//     });
//   }
//
//   return {
//     removeSID : removeSID
//   };
// });
