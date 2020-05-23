import { Component ,OnInit} from '@angular/core';
//import { details } from   '../../../models/details';
//import { ToastrService } from 'ngx-toastr'; 
import { Router } from '@angular/router' ;
import {SetupService } from '../../../services/setup.service';
import { TournamentDetail } from "../../../models/tournamentDetail";
import { SetupData } from "../../../services/setup-data.service";




@Component({
  selector: 'app-tournament-setup',
  templateUrl: './tournament-setup.component.html',
  styleUrls: ['./tournament-setup.component.scss']
})
export class TournamentSetupComponent implements OnInit{
  gridData: any;
  constructor(private _router: Router , private setupService:SetupService){} 
  
  
 getUsers(){
 this.setupService.getUsers().subscribe(data => {
    this.gridData = data;
    localStorage.setItem('tournamentData',JSON.stringify(this.gridData))
  });
}
onRemove(details: TournamentDetail){
this.gridData.splice((this.gridData.length-1) ,1)
 this.setupService.delete(details).subscribe()
  
}


addTournament(){
  this._router.navigate(['/dashboard/addTournament'])
}
public doFilter = (value: string) => {
  this.gridData = value.trim().toLocaleLowerCase();
}
ngOnInit(){
  this.getUsers();
}
  
   
}