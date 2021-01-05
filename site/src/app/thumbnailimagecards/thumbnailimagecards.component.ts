import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {PackageDataService} from '../common/packageDataService';

@Component({
    selector: 'thumbnailimage-cards',
    templateUrl: './thumbnailimagecards.component.html'
})

export class ThumbNailImageCardsComponent implements OnInit {
    URL = './assets/thumbnailimages.json';
    @Input() sectionKey:string;
    @Input() sectionTitle:string;
    sectionData:any[];

   constructor(private _packageDataService: PackageDataService) { }
    ngOnInit() {
        this._packageDataService
            .getExtensionsData(this.URL)
            .then((data) => {   
                this.sectionData=data;
            })
            .catch((err) => {
                console.log(err);
            });
        }
}