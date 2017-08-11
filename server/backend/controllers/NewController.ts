/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express  = require("express");


import INew  = require("../interface/INew");

import NewRepository  = require("../repositories/NewRepository");





class NewController {


    private _newRepository: INew;



  constructor(){
      this._newRepository = new NewRepository();



      //this._newRepository.findById(5);
  }


  retrieve(req: express.Request, res: express.Response): void {
    try {

        // var _newRepository: INew;
        // _newRepository = new NewRepository();
        console.log('-------------------------------');
         this._newRepository.findById(2, (error, user) => {

             console.log('-----------findByIdfindByIdfindByIdfindById--------------------');


             res.send({"error": "error in your request"});

         });
    }
    catch (e)  {
      console.log(e);
    }
  }

}

Object.seal(NewController);
export = NewController;