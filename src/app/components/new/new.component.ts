import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { HttpCarService }    from '../../services/new.service';
import { New } from "../../models/new";


@Component({
  selector: 'my-app',
  template: `
  NEWNENWENENWNENWNENNEW{{title}}
  <a routerLink="/new/detail" routerLinkActive="active">Детальная</a>

  `
})
export class NewComponent {
  title = 'Tour of NEW';

  news: New[] = [];

  constructor(private newService:HttpCarService) {
    console.log('-------------1111------------------');

  }


  ngOnInit() {
    this.newService.getCarsRestful()
      .then((news) => {

        console.log('-------------------------------');
        console.log('news ', news);
        return this.news = news;
      });
  }


}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
