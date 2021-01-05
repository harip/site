import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class MenuHelper {  
    constructor(){}

    toggleClass(className:any,activeClassName:any) {
        let classes = className.split(/\s+/),
            length = classes.length,
            i = 0;
        for(; i < length; i++) {
          if (classes[i] === activeClassName) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(activeClassName);
        }
        let finalClass= classes.join(' ');

        return new Promise( (resolve,reject) =>{
             resolve(finalClass);
        });
    }    
}