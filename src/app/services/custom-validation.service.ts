import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  constructor() { }

   twoDecimalPlacesValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value !== null && control.value !== undefined) {
        const value = control.value.toString();
        const regex = /^\d+(\.\d{0,2})?$/;
        if (!regex.test(value)) {
          return { twoDecimalPlaces: true };
        }
      }
      return null;
    };
  }
}
