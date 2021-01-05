import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    sectionKey:string

    constructor(private _route :  ActivatedRoute) { }
    ngOnInit() {
        debugger
        this.sectionKey = this._route.snapshot.paramMap.get('sectionKey').toLowerCase(); 
    }
}