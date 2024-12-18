import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorPKService {

  constructor() { }
}

export function formatPhoneNumber(phoneNumber: string): string {
  let formattedNumber = phoneNumber;
  if (phoneNumber.startsWith('+92')) {
    formattedNumber = phoneNumber.replace(/^(\+92)(\d{3})(\d{7})$/, '$1 $2 $3');
  } else if (phoneNumber.startsWith('03')) {
    formattedNumber = phoneNumber.replace(/^(03)(\d{2})(\d{7})$/, '$1$2 $3');
  }
  return formattedNumber;
}

export function validatePhoneNumber(phoneNumber: string): { isValid: boolean } {
  const validPattern = /^(\+92\s?\d{3}\s?\d{7}|03\d{2}\s?\d{7})$/; 
  return { isValid: validPattern.test(phoneNumber.replace(/\s+/g, '')) };
}

export function validateCNIC(cnic: string): { isValid: boolean } {
  const cnicRegex = /^\d{5}-?\d{7}-?\d$/;
  return { isValid: cnicRegex.test(cnic) }; 
}

export function formatCNIC(cnic: string): string {
  const sanitizedCNIC = cnic.replace(/-/g, '');
  return sanitizedCNIC.replace(/^(\d{5})(\d{7})(\d)$/, '$1-$2-$3');
}