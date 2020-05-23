import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { phoneNumberValidator } from '../../helper/phoneNumber.validator';
import { dobValidator } from '../../helper/dob.validator';
import { Match } from '../../helper/match.validator';
import { Router } from '@angular/router' ;
import { AlertService } from 'src/app/services/alert.service';
import { AuthService } from '../../services/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  constructor( private formBuilder: FormBuilder,private router: Router , private alertService: AlertService,private auth:AuthService) {}
 ngOnInit() {
      this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.pattern( /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)]],
      phoneNumber:['',[Validators.required,Validators.pattern(/^[789]\d{9}$/)]],
      dateofBirth:['',[Validators.required,dobValidator]],
      password: ['', [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,10}$/)]],
      cnfPassword: ['', Validators.required]
  },{
    validator: Match('password', 'cnfPassword')
}
  );
  }
  get formControls() { return this.registerForm.controls; }

   onSubmit(){
    this.auth.sendToken(this.registerForm.value.email)
    console.log("token"+ this.registerForm.value.email)
    this.router.navigate(['/login']);
    localStorage.setItem('emailValue',JSON.stringify(this.formControls.email.value))
 }
     
  }

