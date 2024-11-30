import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'examples';
  phoneNumber: string = ''; 
  cnic: string = ''; 

  isPhoneNumberValid: boolean = false;
  isCNICValid: boolean = false;
  onValidityChange(valid: boolean) {
    console.log(valid);
    
  }
}
