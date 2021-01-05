import {Component,Input,OnInit} from '@angular/core'

@Component({
    selector:'extensionsList',
    templateUrl:'./extensionsList.component.html'
})

export class ExtensionsListComponent implements OnInit{
    @Input() extensionsList:any[];
    ngOnInit(){}
}