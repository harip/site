import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {PackageDataService} from '../common/packageDataService';

@Component({
    selector: 'detailed-card',
    templateUrl: './detailedcard.component.html'
})

export class DetailedCardComponent implements OnInit {
    packageData: any;
    methodNames:any[];
    showhideSourceLink:any;
    size:any;

    constructor(
        private _packageDataService: PackageDataService,
        private _route :  ActivatedRoute
    ) {}
    ngOnInit() {
        let id = this._route.snapshot.paramMap.get('id').toLowerCase();      
        let baseUrl=`./assets/${id}.json`;

        this._packageDataService
            .getExtensionsData(baseUrl)
            .subscribe((returnData) => {
                debugger
                this.packageData = returnData
                this.methodNames=returnData['data'].map((d:any)=> d.methodName);
                this.showhideSourceLink=this.packageData.gitLink ? true : false;  
            });
    }
}