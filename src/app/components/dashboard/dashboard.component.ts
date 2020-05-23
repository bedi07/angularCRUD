import { Component} from '@angular/core';
import { Router } from '@angular/router' ;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  {
  constructor(private _router: Router){} 
  navList = ['Tournament Setup', 'Team Setup', 'Fixture Setup'];
  onBack(): void { 
    this._router.navigate(['/']); 
 } 

}
