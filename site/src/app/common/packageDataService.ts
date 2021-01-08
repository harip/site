import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class PackageDataService {
  constructor(private _http: HttpClient) { }

  getExtensionsData(dataUrl:any) {
    return this._http.get(dataUrl);
      // .map((response: Response) => response.json())
      // .toPromise()
      // .catch((err: any) => {
      //   console.log(err); // again, customize me please
      //   return Promise.reject(err);
      // });
  }

  get(dataUrl:any) {
    return this._http.get(dataUrl)
      .map((response: Response) => response)
      .toPromise()
      .catch((err: any) => {
        console.log(err); // again, customize me please
        return Promise.reject(err);
      });
  }
}