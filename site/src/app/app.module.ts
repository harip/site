import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { JsonpModule }    from '@angular/http';
import { Routes, RouterModule } from '@angular/router'; 
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {CodemirrorModule} from 'ng2-codemirror-typescript/Codemirror';
import {Ng2PageScrollModule} from 'ng2-page-scroll'; 
import 'rxjs/Rx'; // get everything from Rx
import { AppComponent }  from './app.component';
import {PackageDataService} from './common/packageDataService';
import {NugetService} from './nugetstats/nugetService';
import {NpmStatsService} from './npmhome/npmStatsService';
import {MenuHelper} from './common/menuHelper';

import {ExtensionMethodSampleComponent} from './common/extensionMethodSample.component';

import {ExtensionMethodComponent} from './printclassinstance/extensionMethod.component';

import {HomeComponent} from './home/home.component';
import {MenuComponent} from './menu/menu.component';
import {ExtensionsListComponent} from './common/extensionsList.component';
import {NugetStatsComponent} from './nugetstats/nugetstats.component';
import {AboutComponent} from './about/about.component';
import {RecipesComponent} from './recipes/recipes.component';
import {PythonComponent } from './python/python.component';
import {PythonDsComponent } from './python/pythonds.component';
import {ThumbNailCardsComponent} from './thumbnailcards/thumbnailcards.component';
import {DetailedCardComponent} from './detailedcard/detailedcard.component';
import {ThumbNailImageCardsComponent} from './thumbnailimagecards/thumbnailimagecards.component';
import {DetailedImageCardComponent} from './detailedimagecard/detailedimagecard.component';


import { Routing } from './app.routes';

@NgModule({
  imports:      [ BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    Routing,
    BrowserAnimationsModule,
    CodemirrorModule,
    Ng2PageScrollModule.forRoot()
  ],
  declarations: [ AppComponent,
    ExtensionMethodComponent,
    ExtensionMethodSampleComponent,
    HomeComponent,
    MenuComponent,
    ExtensionsListComponent,
    NugetStatsComponent,
    AboutComponent,
    RecipesComponent,
    PythonComponent,
    PythonDsComponent,
    ThumbNailCardsComponent,
    DetailedCardComponent,
    ThumbNailImageCardsComponent,
    DetailedImageCardComponent
  ],
  bootstrap:    [ AppComponent ],
  providers:[PackageDataService,
    MenuHelper,
    NugetService,
    NpmStatsService
  ]
})
export class AppModule { }
