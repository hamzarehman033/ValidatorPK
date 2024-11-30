import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { validatePhoneNumber } from './validator-pk.service';

@Directive({
  selector: '[validatePhone]'
})
export class ValidatorPkDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('input', ['$event.target.value'])
  onInputChange(value: string) {
    const validation = validatePhoneNumber(value);
    if (validation.isValid) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid green');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid red');
    }
  }
}
