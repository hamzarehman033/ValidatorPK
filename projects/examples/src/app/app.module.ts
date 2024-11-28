import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ValidatorPKModule } from 'projects/validator-pk/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ValidatorPKModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
