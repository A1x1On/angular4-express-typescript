import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { NewsComponent } from './components/news/news.component';
import { NewComponent } from './components/new/new.component';
import { FormsModule } from '@angular/forms'
import { HttpCarService } from './services/new.service'
import { DataService } from './services/data.service'
import { HttpModule } from '@angular/http'
import { RouterModule, Routes, ActivatedRoute, Router, Params, ParamMap} from '@angular/router'
import {Subscription} from 'rxjs/Subscription';


const appRoutes: Routes = [
  {
    path: '', component:NewComponent
  },
  {
    path: 'news/:id', component: NewsComponent
  },
  {
    path: 'news', component: NewsComponent
  }

];


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NewsComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService, HttpCarService],
  bootstrap: [AppComponent]
})
export class AppModule {


  subscription:Subscription;


  private accesstoken;
  private code;


  constructor() {


    //
    //this.route.paramMap
    //  .switchMap((params: ParamMap) => {
    //
    //    console.log('params ', params);
    //
    //   // console.log('test ', params.get('id'));
    //  })
    //  .subscribe((hero: Hero) => this.hero = hero);




    //
    //this.route
    //  .queryParams
    //  .subscribe(params => {
    //
    //    console.log('params ', params);
    //
    //    this.accesstoken = params['#access_token'];
    //    this.code = params['code'];
    //  });


    //this.id = this.route.queryParams.subscribe(params => {
    //  this.loginName = params['test'];
    //  console.log('this.loginName ', this.loginName);
    //
    //});

    console.log('--------!!!!-----------------------');

  }






}
