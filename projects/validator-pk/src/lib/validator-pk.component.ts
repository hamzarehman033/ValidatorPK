import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { formatPhoneNumber, validatePhoneNumber } from './validator-pk.service';
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
        [placeholder]="placeholder"
      />
      <p *ngIf="errorMessage && showError" style="color: red;">{{ errorMessage }}</p>
    </div>
  `,
  styles: [],
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
  @Input() errorMessage: string = '';
  @Input() placeholder: string = 'Enter a phone number';
  @Input() autoFormat: boolean = false;
  phoneNumber: string = '';
  showError: boolean = false;

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    let value = inputElement?.value || '';
    this.phoneNumber = value;

    const validation = validatePhoneNumber(this.phoneNumber);
    const isValid = validation.isValid;

    if (isValid && this.autoFormat) {
      this.phoneNumber = formatPhoneNumber(this.phoneNumber);
      value = this.phoneNumber;
    }

    this.onChange(value);
    this.isValid.emit(isValid);
    this.showError = !isValid;
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
