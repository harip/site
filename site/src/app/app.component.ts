import { Component, OnInit, Input } from '@angular/core';
import { MenuHelper } from './common/menuHelper';

@Component({ 
  selector: 'my-app',
  templateUrl:'app.component.html'
})


export class AppComponent implements OnInit {
  name = 'Angular';
  layoutClass={
    cssClass:''
  };

  constructor(private _menuHelper:MenuHelper){}

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
