import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  myData: any;
  
   behaviorSubject = new BehaviorSubject({})

  constructor(private http: HttpClient) { }

  getData(){
    this.myData = this.http.get('https://jsonplaceholder.typicode.com/posts')
    return this.myData
   
  }


  postData(formData: any){
    return this.http.post('https://jsonplaceholder.typicode.com/posts',formData,{})
  }
}
