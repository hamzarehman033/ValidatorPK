import { NgModule } from '@angular/core';
import { ValidatorPKComponent } from './validator-pk.component';
import { ValidatorPkDirective } from './validator-pk.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ValidatorPKComponent,
    ValidatorPkDirective
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ValidatorPKComponent,
    ValidatorPkDirective
  ]
})
export class ValidatorPKModule { }
