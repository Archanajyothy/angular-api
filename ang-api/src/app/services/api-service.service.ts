import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  myData: any;
  
   behaviorSubject = new BehaviorSubject({})

  constructor(private http: HttpClient) { }

  
  getData(apiUrl: any){
    this.myData = this.http.get(apiUrl)
    return this.myData
   
  }

  

  postData(data: any, apiUrl: any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
  
    })
    return this.http.post(apiUrl,data,{headers})
  }
}
