import INew     = require("../interface/INew");
import bluebird = require("bluebird");

import mysql    = require('../common/mysql');

class NewRepository implements INew {
  sd: string;


  constructor() {
    console.log('-------------NewRepository------------------');

    console.log('mysql ', mysql);

  }





  findById(id: number, callback): any {

    return mysql.getConnection((conn) => {
      return conn.queryAsync(`
        SELECT
          *
        FROM
          news
        WHERE
        id = :idr
      `, {idr: 1}).then((rows) => {


        console.log('rows ', rows);

        return rows;
      });
    });
  };

  // findById(id: number, callback): any {
  //
  //
  //   new Promise((resolve) => {
  //
  //
  //     console.log('----------RESULT---------------------');
  //     setTimeout(function () {
  //
  //       callback(null, resolve({dsf: 'ffff'}))
  //     }, 3000);
  //
  //   });
  //
  // }


}

export = NewRepository;