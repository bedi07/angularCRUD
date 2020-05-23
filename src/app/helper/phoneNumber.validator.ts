import { AbstractControl } from "@angular/forms";
export function phoneNumberValidator(control: AbstractControl) {
   let phoneNumber = control.value; 
   let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phoneNumber.startsWith("0") || phoneNumber.length != 10 ) 
    {
        return {'phoneNumberInvalid': true };
    }
   if (phoneNumber.match(phoneno)){
    return {'phoneNumberInvalidFormat': true }; 
   }
      return null;
  }