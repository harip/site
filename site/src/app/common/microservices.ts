import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class Microservices {
  constructor(private _http: Http) { }

  AVG_URL=""
  getAverageCurve(){
      
  }  

  getExtensionsData(dataUrl:any) {
    return this._http.get(dataUrl)
      .map((response: Response) => response.json())
      .toPromise()
      .catch((err: any) => {
        console.log(err); // again, customize me please
        return Promise.reject(err);
      });
  }
}