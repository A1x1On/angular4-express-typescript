import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';



import {Headers, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Observable}     from 'rxjs/Observable';
import { New } from "../models/new";

@Injectable()
export class HttpCarService {

  private baseUrl:string = 'api/new';

  constructor(private http: Http){ }


  getCarsRestful(): Promise<New[]> {
    console.log('-------------removeffSID------------------');
    return this.http.get('api/new')
      .toPromise()
      .then((response) => {


        console.log('response.json() ', response.json());

        return response.json();
      })
      .catch(this.handleError);
  }





  private handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || ' error');
  }
}
