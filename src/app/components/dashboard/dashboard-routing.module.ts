import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TournamentSetupComponent } from './tournament-setup/tournament-setup.component';
import { DashboardComponent } from './dashboard.component';
import { TeamSetupComponent } from './team-setup/team-setup.component';
import { FixerSetupComponent } from './fixer-setup/fixer-setup.component';
import { AddTournamentComponent } from './add-tournament/add-tournament.component';
import {AuthGuard } from '../../admin/admin.guard'



const routes: Routes = [
   
  {
    path: '', component: DashboardComponent,canActivate: [AuthGuard],
    children: [
     { path: '',
      canActivateChild: [AuthGuard]},
      { path: 'tournamentsetup', component: TournamentSetupComponent },
      { path: 'teamsetup', component: TeamSetupComponent },
      { path: 'fixersetup', component: FixerSetupComponent },
      { path: 'addTournament', component: AddTournamentComponent }
 ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }