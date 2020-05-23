import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { TournamentDetail} from '../models/tournamentDetail';
import { SetupData } from "./setup-data.service";

@Injectable({
    providedIn: 'root'
  })
  export class SetupService {
  
   private apiurl = 'api/setupDetails';  // URL to web api
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    
    constructor(private http: HttpClient) {}
  
    private handleError(error: any) {
      console.log(error);
      return throwError(error);
    }
  
    getUsers(): Observable<TournamentDetail[]> {
      return this.http.get<TournamentDetail[]>(this.apiurl).pipe(
        tap(data => console.log(data)),
        catchError(this.handleError)
      );
    }
    
    
    delete(details: TournamentDetail|number):Observable<TournamentDetail> {
      const id = typeof details === 'number' ? details : details.id;
     return this.http.delete<TournamentDetail>(`${this.apiurl}/${id}`).pipe(
     catchError(this.handleError)
      );
  }
 
  addTournament(details: TournamentDetail):Observable<TournamentDetail>  {
    return this.http.post<TournamentDetail> (this.apiurl ,details,this.httpOptions);
  }
}