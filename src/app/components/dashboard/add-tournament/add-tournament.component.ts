import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {SetupService } from '../../../services/setup.service';



@Component({
  selector: 'add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.scss']
})
export class AddTournamentComponent implements OnInit {
  TournamentId: number;
  constructor(private formBuilder: FormBuilder,private router: Router, private setupService: SetupService) { }
  addForm: FormGroup;
  gridData=[];

 ngOnInit() {
    this.addForm = this.formBuilder.group({
      id:[''],
      TournamentName:['',Validators.required],
      StartDate:['',Validators.required],
      EndDate:['',Validators.required]
    })
  }
  get formControls() { return this.addForm.controls; }
  onSubmit() {
    const payload = {
      id:Math.floor((Math.random() * 100) + 1),
      TournamentName: this.addForm.controls.TournamentName.value,
      StartDate:this.addForm.controls.StartDate.value,
      EndDate:this.addForm.controls.EndDate.value,
    };
    this.setupService.addTournament(payload)
      .subscribe( data => {
        console.log(data);
        let id = data['id'];
        console.log(data.id)
        this.router.navigate(['/dashboard/tournamentsetup'])
      });
  }

 
}

