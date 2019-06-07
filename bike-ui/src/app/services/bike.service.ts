import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 


@Injectable({
  providedIn: 'root'
})



export class BikeService {
  private bikeUrl = 'api/heroes';
  private http: HttpClient;

  constructor() {
    
  }

  getBikes() {
    return this.http.get("http://localhost:8090/list");


  }



}
