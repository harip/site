import { Injectable } from '@angular/core';
import { Http, Response,Jsonp,Headers,URLSearchParams  } from '@angular/http';

@Injectable()
export class NpmStatsService{
    URL_Base='https://api.npmjs.org/downloads/point/1900-01-01';
    
    constructor(private _http:Http){}

    getNpmDownloadCount(packageId:any){

            var today=new Date();
            var endDate=`${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
            let packageUrl=`${this.URL_Base}:${endDate}/${packageId}`;
        return this._http.get(packageUrl)
            .map((response:Response)=>{
                var res=response.json();
                return res;
            })
            .toPromise()
            .catch((err: any) => {
                console.log(err); // again, customize me please
                return Promise.reject(err);
            });
    }
}