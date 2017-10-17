import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Rest {
apiUrl = 'https://jsonplaceholder.typicode.com';
  constructor(public http: HttpClient) {
    //console.log('Hello RestProvider Provider');
  }
getUsers() {
  return new Promise(resolve => {
    this.http.get(this.apiUrl+'/users').subscribe(data => {
      resolve(data);
      //console.log(data);
    }, err => {
     // console.log(err);
    });
  });
}
}
