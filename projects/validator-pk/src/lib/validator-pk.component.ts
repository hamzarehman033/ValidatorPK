import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { formatCNIC, formatPhoneNumber, validateCNIC, validatePhoneNumber } from './validator-pk.service';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-validatorPK',
  template: `
    <ng-container>
      <input
        id="phone"
        type="text"
        [class]="class"
        [ngClass]="{
          'is-invalid': showError
        }"
        [value]="phoneNumber"
        (input)="onInputChange($event)"
        [placeholder]="placeholder"
      />
      <p *ngIf="errorMessage && showError" style="color: red;">{{ errorMessage }}</p>
    </ng-container>
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
  @Output() validChange = new EventEmitter<boolean>();
  @Input() errorMessage: string = '';
  @Input() class: string = '';
  @Input() placeholder: string = 'Enter a phone number';
  @Input() autoFormat: boolean = false;
  @Input() type: 'phone' | 'cnic' = 'phone';

  private isValid: boolean = false;

  @Input()
  get valid(): boolean {
    return this.isValid;
  }

  // Prevent external modification of `valid`
  set valid(value: boolean) {
    console.warn('valid is read-only and cannot be set externally.');
  }

  phoneNumber: string = '';
  showError: boolean = false;

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    let value = inputElement?.value || '';
    this.phoneNumber = value;

    if (this.type === 'phone') {
      const validation = validatePhoneNumber(this.phoneNumber);
      this.isValid = validation.isValid;

      if (this.isValid && this.autoFormat) {
        this.phoneNumber = formatPhoneNumber(this.phoneNumber);
        value = this.phoneNumber;
      }
    } else if (this.type === 'cnic') {
      const validation = validateCNIC(this.phoneNumber);
      this.isValid = validation.isValid;
      if (this.isValid && this.autoFormat) {
        this.phoneNumber = formatCNIC(this.phoneNumber);
        value = this.phoneNumber;
      }
    }

    this.onChange(value);
    this.validChange.emit(this.isValid);
    this.showError = !this.isValid;
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
