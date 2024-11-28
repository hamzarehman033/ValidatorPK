import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorPKService {

  constructor() { }
}

export function formatPhoneNumber(number: string) {
  if (!validatePhoneNumber(number).isValid) {
    return { error: 'Invalid phone number' };
  }
  return number.replace(/^0/, '+92').replace(/-/g, '');
}

export function validatePhoneNumber(phone: string): { isValid: boolean; error?: string } {
  const phoneRegex = /^(?:\+92|0092|0)?3[0-9]{2}[0-9]{7}$/;

  if (!phoneRegex.test(phone)) {
    return { isValid: false, error: 'Invalid phone number format' };
  }
  return { isValid: true };
}
