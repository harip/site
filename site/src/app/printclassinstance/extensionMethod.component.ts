import {Component,Input,OnInit} from '@angular/core'

import {ExtensionMethodSampleComponent} from '../common/extensionMethodSample.component'

@Component({
    selector:'extensionMethod',
    templateUrl:'./extensionMethod.component.html'
})

export class ExtensionMethodComponent implements OnInit{
    @Input() extMethod:any;    
    @Input() size:any;
    showSourceLink:any;
    showExtensionLink:any;
    ngOnInit(){
        this.showSourceLink= this.extMethod.gitLink ? false : true;
        this.showExtensionLink= this.extMethod.extensionLink ? false : true;
    }
}