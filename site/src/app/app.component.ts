import { Component, OnInit, Input, Injector } from '@angular/core';
import { MenuHelper } from './common/menuHelper';
import { createCustomElement } from '@angular/elements';
import { PythonDsComponent } from './python/pythonds.component';

@Component({ 
  selector: 'my-app',
  templateUrl:'app.component.html'
})


export class AppComponent implements OnInit {
  name = 'Angular';
  layoutClass={
    cssClass:''
  };

  constructor(private _menuHelper:MenuHelper, injector: Injector){

  }

  ngOnInit(): void {
  }

  mainContentClick(){
    if (this.layoutClass.cssClass.indexOf('active') !== -1) {
        let active = 'active';
        this._menuHelper
            .toggleClass(this.layoutClass.cssClass,active)
            .then((data:any)=>{                
                this.layoutClass.cssClass=data;
            });
        }
  }
}
