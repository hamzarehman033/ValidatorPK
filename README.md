# ValidatorPK

**ValidatorPK** is an Angular library for validating and formatting Pakistani phone numbers and CNICs. This library simplifies handling common validation tasks and ensures proper formatting with minimal effort.

## Features

- Validate Pakistani phone numbers (with or without spaces).
- Format phone numbers automatically (`+92 300 1234567` or `0300 1234567`).
- Validate CNICs (with or without hyphens).
- Format CNICs automatically (`12345-1234567-1`).

---

## Installation

Install the package via npm:

```bash
npm install validatorpk
```

---

## Usage

### Import the Module

Add the `ValidatorPKModule` to your Angular module:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ValidatorPKModule } from 'validatorpk';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ValidatorPKModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

---

### Basic Usage

Use the `<lib-validatorPK>` component in your template. You can validate both **phone numbers** and **CNICs** using the `type` input property.

#### Phone Number Validation

```html
<lib-validatorPK
  [type]="'phone'"
  [(ngModel)]="phoneNumber"
  [(valid)]="isPhoneNumberValid"
  [errorMessage]="'Please enter a valid phone number!'"
  [placeholder]="'Enter your phone number'"
  [autoFormat]="true"
></lib-validatorPK>
```

#### CNIC Validation

```html
<lib-validatorPK
  [type]="'cnic'"
  [(ngModel)]="cnic"
  [(valid)]="isCNICValid"
  [errorMessage]="'Please enter a valid CNIC!'"
  [placeholder]="'Enter your CNIC'"
  [autoFormat]="true"
></lib-validatorPK>
```

---

### Adding Custom Classes  

You can pass custom classes from the parent component for styling the input field. Additionally, a default `invalid` class is applied when the input is invalid.

```html
<lib-validatorPK 
  [type]="'phone'"
  [(ngModel)]="phoneNumber" 
  [(valid)]="isPhoneNumberValid" 
  [errorMessage]="'Please enter a valid phone number!'" 
  [placeholder]="'Enter your phone number'" 
  [class]="'my-custom-class'"
  [autoFormat]="true"
></lib-validatorPK>
```

### Handling `invalid` Class  

The library automatically adds the `invalid` class when the input value is invalid. This can be used for conditional styling:

```css
.invalid {
  border-color: red;
  background-color: #ffe6e6;
}
```

---

### Inputs

| Input          | Type      | Default                 | Description                                                              |
|-----------------|-----------|-------------------------|--------------------------------------------------------------------------|
| `type`         | `string`  | `'phone'`               | Specifies whether to validate a `phone` or `cnic`.                      |
| `errorMessage` | `string`  | `''`                    | The error message displayed for invalid input.                          |
| `placeholder`  | `string`  | `'Enter value'`         | Placeholder text for the input field.                                   |
| `autoFormat`   | `boolean` | `false`                 | If `true`, automatically formats the input when it's valid.             |
| `class`        | `string`  | `''`                    | Custom CSS classes to apply to the input field. The `invalid` class is automatically added for invalid inputs. |

---

### Outputs

| Output       | Type          | Description                                                             |
|--------------|---------------|-------------------------------------------------------------------------|
| `[(valid)]`  | `boolean`     | Two-way binding to track the validity of the input (phone or CNIC). Emits `true` if valid, `false` if invalid.  |

---

---

### Formatting Rules

- **Phone Numbers**
  - Input: `+923001234567` → Output: `+92 300 1234567`
  - Input: `03001234567` → Output: `0300 1234567`

- **CNIC**
  - Input: `1234512345671` → Output: `12345-1234567-1`

---

## Development

### Clone the Repository

```bash
git clone https://github.com/your-repo/validatorpk.git
cd validatorpk
```

### Build the Library

```bash
ng build validator-pk
```

### Run Tests

```bash
ng test validator-pk
```

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements.

---

## License

This project is licensed under the MIT License.

---

## Author

Developed by **Hamza Rehman**. Feel free to reach out for any feedback or collaboration!

---
