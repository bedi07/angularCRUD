import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TournamentDetail } from '../models/tournamentDetail';

@Injectable({
  providedIn: 'root',
})


export class SetupData implements InMemoryDbService {
  createDb(){
    const setupDetails: TournamentDetail[]=[
        {
      "id": 1,
      "TournamentName": "World Cup",
      "StartDate": new Date(1996, 8, 20),
      "EndDate": new Date(1996, 10, 20),
    
    },
    {
        "id": 2,
        "TournamentName": "Champion's Trophy",
        "StartDate": new Date(1996, 8, 20),
        "EndDate": new Date(1996, 10, 20),
       
    },
    {  
         "id": 3,
         "TournamentName": "Asia Cup",
         "StartDate": new Date(1996, 8, 20),
         "EndDate": new Date(1996, 10, 20),
    
    },
    {
        "id": 4,
        "TournamentName": "IPL",
        "StartDate": new Date(1996, 8, 20),
        "EndDate": new Date(1996, 10, 20),
    
    }
    ];

    return {setupDetails};
   
  }
  genId(setupDetails: TournamentDetail[]): number {
    return setupDetails.length > 0 ? Math.max(...setupDetails.map(detail => detail.id)) + 1 : 11;
  }
}