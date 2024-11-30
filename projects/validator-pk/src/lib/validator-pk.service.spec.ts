import { TestBed } from '@angular/core/testing';

import { formatPhoneNumber, validatePhoneNumber, validateCNIC, formatCNIC } from './validator-pk.service';

describe('ValidatorPKService', () => {
  describe('formatPhoneNumber', () => {
    it('should format +92 phone numbers correctly', () => {
      const input = '+923331234567';
      const expectedOutput = '+92 333 1234567';
      expect(formatPhoneNumber(input)).toBe(expectedOutput);
    });

    it('should format 03 phone numbers correctly', () => {
      const input = '03331234567';
      const expectedOutput = '0333 1234567';
      expect(formatPhoneNumber(input)).toBe(expectedOutput);
    });

    it('should return the same number if it does not match any format', () => {
      const input = '1234567890';
      expect(formatPhoneNumber(input)).toBe(input);
    });
  });

  describe('validatePhoneNumber', () => {
    it('should validate correct +92 formatted numbers', () => {
      const input = '+92 333 1234567';
      expect(validatePhoneNumber(input).isValid).toBeTrue();
    });

    it('should validate correct 03 formatted numbers', () => {
      const input = '0333 1234567';
      expect(validatePhoneNumber(input).isValid).toBeTrue();
    });

    it('should validate numbers without spaces or dashes', () => {
      const input = '+923331234567';
      expect(validatePhoneNumber(input).isValid).toBeTrue();
    });

    it('should return invalid for incorrect phone numbers', () => {
      const input = '1234567890';
      expect(validatePhoneNumber(input).isValid).toBeFalse();
    });
  });

  describe('validateCNIC', () => {
    it('should validate CNIC with dashes', () => {
      const input = '12345-1234567-1';
      expect(validateCNIC(input).isValid).toBeTrue();
    });

    it('should validate CNIC without dashes', () => {
      const input = '1234512345671';
      expect(validateCNIC(input).isValid).toBeTrue();
    });

    it('should return invalid for incorrect CNIC format', () => {
      const input = '12345-1234567';
      expect(validateCNIC(input).isValid).toBeFalse();
    });

    it('should return invalid for short CNIC', () => {
      const input = '12345-12345-1';
      expect(validateCNIC(input).isValid).toBeFalse();
    });
  });

  describe('formatCNIC', () => {
    it('should format CNIC correctly', () => {
      const input = '1234512345671';
      const expectedOutput = '12345-1234567-1';
      expect(formatCNIC(input)).toBe(expectedOutput);
    });

    it('should return the same CNIC if already formatted', () => {
      const input = '12345-1234567-1';
      expect(formatCNIC(input)).toBe(input);
    });
  });

});
