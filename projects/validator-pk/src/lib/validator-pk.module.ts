import { NgModule } from '@angular/core';
import { ValidatorPKComponent } from './validator-pk.component';
import { ValidatorPkDirective } from './validator-pk.directive';



@NgModule({
  declarations: [
    ValidatorPKComponent,
    ValidatorPkDirective
  ],
  imports: [
  ],
  exports: [
    ValidatorPKComponent,
    ValidatorPkDirective
  ]
})
export class ValidatorPKModule { }
