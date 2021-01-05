import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { MenuHelper } from '../common/menuHelper';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html'
})

export class MenuComponent implements OnInit {
    clickClass:any;
    testBind:any;
    @Input() layoutClass:any;
    constructor(private _menuHelper: MenuHelper) { }
    ngOnInit() {
        this.clickClass='menu-link';
    }

    menuLinkClick(){
        this.clickClass='menu-link active';
        let active = 'active';
        this._menuHelper
            .toggleClass(this.layoutClass.cssClass,active)
            .then((data:any)=>{                
                this.layoutClass.cssClass=data;
            });
    }   
    menuItemClick(){
        debugger
        this._menuHelper
            .toggleClass(" active","active")
            .then((data:any)=>{                
                this.layoutClass.cssClass=data;
            });
    }
}