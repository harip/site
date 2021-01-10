import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PythondsComponent } from './pythonds/pythonds.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [ 
    PythondsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], 
  entryComponents: [PythondsComponent]
})
export class AppModule {
  constructor(private injector: Injector) { 
    const el = createCustomElement(PythondsComponent, {injector : this.injector});
    customElements.define('custom-pythonds', el);
  }

  // tslint:disable-next-line:typedef
  ngDoBootstrap(){
  }
}
