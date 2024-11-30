import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'examples';
  phoneNumber: string = ''; 

  isPhoneNumberValid: boolean = false;
  onValidityChange(valid: boolean) {
    console.log(valid);
    
  }
}
