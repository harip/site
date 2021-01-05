import {Component,Input,OnInit} from '@angular/core'

@Component({
    selector:'extensionMethodSample',
    templateUrl:'./extensionMethodSample.component.html'
})

export class ExtensionMethodSampleComponent implements OnInit{
    config:{};
    @Input() methodSample:any;   
    
    constructor() {
        this.config={ 
            lineNumbers: true, 
            mode: 'python',
            theme:'mdn-like'
        };
    }
    ngOnInit(){}
}