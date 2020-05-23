import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TournamentSetupComponent } from './tournament-setup/tournament-setup.component';
import { DashboardComponent } from './dashboard.component';
import { TeamSetupComponent } from './team-setup/team-setup.component';
import { FixerSetupComponent } from './fixer-setup/fixer-setup.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { AddTournamentComponent } from './add-tournament/add-tournament.component';


@NgModule({
  declarations: [
    TournamentSetupComponent,
    TeamSetupComponent,
    FixerSetupComponent,
    DashboardComponent,
    AddTournamentComponent
],
  imports: [
    CommonModule,
    GridModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    DashboardRoutingModule
   
 ]
})
export class DashboardModule { }