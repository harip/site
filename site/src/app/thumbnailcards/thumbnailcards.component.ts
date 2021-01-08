import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {PackageDataService} from '../common/packageDataService';

@Component({
    selector: 'thumbnail-cards',
    templateUrl: './thumbnailcards.component.html'
})

export class ThumbNailCardsComponent implements OnInit {
    URL_NugetPackages = './assets/packages.json';
    @Input() sectionKey:string;
    @Input() sectionTitle:string;
    sectionData:any[];

   constructor(private _packageDataService: PackageDataService) { }
    ngOnInit() {
        this._packageDataService
            .getExtensionsData(this.URL_NugetPackages)
            .subscribe((data:any) => {   
                this.sectionData=data.filter((d:any)=> {return  d.type===this.sectionKey});
            });
        }
}