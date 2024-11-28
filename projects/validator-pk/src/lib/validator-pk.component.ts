import { Component, EventEmitter, forwardRef, Output } from '@angular/core';
import { validatePhoneNumber } from './validator-pk.service';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-validatorPK',
  template: `
        <div>
      <label for="phone">Phone Number:</label>
        <input
          id="phone"
          type="text"
          [value]="phoneNumber"
          (input)="onInputChange($event)"
          placeholder="Enter a phone number"
        />
        <p *ngIf="errorMessage" style="color: red;">{{ errorMessage }}</p>
      </div>

  `,
  styles: [
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ValidatorPKComponent),
      multi: true,
    },
  ],
})
export class ValidatorPKComponent {
  @Output() isValid = new EventEmitter<boolean>();

  phoneNumber: string = '';
  errorMessage: string | null = null;

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  onInputChange(event: Event) {

    const inputElement = event.target as HTMLInputElement; // Cast to HTMLInputElement
    const value = inputElement?.value || ''; // Safely get the value
    this.phoneNumber = value;
    this.onChange(this.phoneNumber); // Notify parent of changes

  
    const validation = validatePhoneNumber(this.phoneNumber);
    if (validation.isValid) {
      this.errorMessage = null;
      this.isValid.emit(true);
    } else {
      this.errorMessage = validation.error || 'Invalid phone number format';
      this.isValid.emit(false);
    }
  }

  writeValue(value: string): void {
    this.phoneNumber = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
