import { Component, OnInit, Input,ViewChild, ElementRef  } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {PackageDataService} from '../common/packageDataService';

@Component({
    selector: 'app-python-ds',
    templateUrl:'./pythonds.component.html'
})

export class PythonDsComponent implements OnInit {

    packageData: any;
    methodNames:any[];
    showhideSourceLink:any;

    constructor( private _packageDataService: PackageDataService) {}
    ngOnInit() {

        let baseUrl=`./assets/pythonds.json`;

        this._packageDataService
            .getExtensionsData(baseUrl)
            .then((returnData) => {
                debugger
                this.packageData = returnData
                this.methodNames=returnData.data.map((d:any)=> d.methodName);
                this.showhideSourceLink=this.packageData.gitLink ? true : false;
            })
            .catch((err) => {
                console.log(err); // dont do this, show the user a nice message
            });        

    }
}