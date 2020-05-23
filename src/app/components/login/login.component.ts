import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router' ;
import { AlertService } from 'src/app/services/alert.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor( private formBuilder: FormBuilder,private router: Router , private alertService: AlertService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern( /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,10}$/)]],
    })
  }

  
  get formControls() { return this.loginForm.controls; }

  login(){ 
    this.alertService.clear();
    let regEmail = JSON.parse(localStorage.getItem("emailValue"))
    let loginEmail = this.formControls.email.value
   if(loginEmail === regEmail){
        this.router.navigate(['/dashboard/tournamentsetup']);
    }
    else {
       this.alertService.error("No such email is registered")
     
     }
  }
    
   
  }



