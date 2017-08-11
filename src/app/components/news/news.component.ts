import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, Router, Params, ParamMap} from '@angular/router'
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {




  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {

   // this.router.navigate(['/results'], { queryParams: { page: 1 } });

    this.route.fragment.subscribe((fragment: string) => {
      console.log("My hash fragment is here => ", fragment)
    })


    this.route
      .queryParams
      .subscribe(params => {
        console.log('paramsh]; ', params['#test']);

        console.log('params1 ', params);
      });


    this.route.params.subscribe((params: Params) => {
      console.log('params2 ', params);
    });

  }


}
