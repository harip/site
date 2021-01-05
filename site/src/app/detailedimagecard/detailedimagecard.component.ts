import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {PackageDataService} from '../common/packageDataService';

@Component({
    selector: 'detailedimage-card',
    templateUrl: './detailedimagecard.component.html'
})

export class DetailedImageCardComponent implements OnInit {
    packageData: any;
    methodNames:any[];
    showhideSourceLink:any;
    config:{};

    constructor(
        private _packageDataService: PackageDataService,
        private _route :  ActivatedRoute
    ) {
        this.config={ 
            lineNumbers: true, 
            mode: 'python',
            theme:'mdn-like'
        };
        this.packageData={};
    }
    ngOnInit() {
        let id = this._route.snapshot.paramMap.get('id').toLowerCase();      
        let key = this._route.snapshot.paramMap.get('key').toLowerCase();  
        let baseUrl='./assets/thumbnailimages.json';

        this._packageDataService
            .getExtensionsData(baseUrl)
            .then((returnData) => {
                this.packageData=returnData.find((d:any)=> {return d.title.toLowerCase()==id} );    
                this.packageData=this.packageData.images.find((d:any)=>d.key.toLowerCase()==key);
            })
            .catch((err) => {
                console.log(err); // dont do this, show the user a nice message
            });      
    }
}