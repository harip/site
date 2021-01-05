import { Injectable } from '@angular/core';
import { Http, Response,Jsonp,Headers,URLSearchParams  } from '@angular/http';
import {NugetPackageMeta} from '../models/nugetpackagemeta'

@Injectable()
export class NugetService{
    URL_Base='https://api-v2v3search-0.nuget.org/query?q=packageid';
    
    constructor(private _http:Http){}

    getPackageDetailsFromNuget(packageId:any){
        let packageUrl=`${this.URL_Base}:${packageId}`;
        return this._http.get(packageUrl)
            .map((response:Response)=>{
                var res=response.json();
                let packageInfo=new NugetPackageMeta();
                packageInfo.LatestVersion=res.data[0].version;
                packageInfo.TotalDownloads=res.data[0].totalDownloads;
                return packageInfo;
            })
            .toPromise()
            .catch((err: any) => {
                console.log(err); // again, customize me please
                return Promise.reject(err);
            });
    }
}