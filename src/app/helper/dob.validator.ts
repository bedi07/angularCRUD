import { AbstractControl } from "@angular/forms";
export function dobValidator(control: AbstractControl) {
   let dob = control.value; 
   let dateOfBirth = new Date(dob);
   let todayDate = new Date();
    if (dateOfBirth >= todayDate ) 
    {
        return {'dateOfBirth': true };
    }
  return null; 
  }