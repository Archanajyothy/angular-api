import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{
  tabData: any[] = [];
  newTabData: any;

  constructor(private apiService : ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.getData().
    subscribe((res: any)=> {
      this.tabData = res
    })


    this.apiService.behaviorSubject.subscribe((res) => {
      this.newTabData = res
      console.log('from newTabData');
      
       console.log(this.newTabData);
       this.appendData()
    })
     //console.log(this.tabData);
  }

  
  appendData(){
    console.log('inside function');
    
    if (this.newTabData && this.newTabData['0'] ) {
      console.log('inside if');
      
      const innerObject = this.newTabData['0'];

      const newData = {
        id: innerObject.id, 
        userId: innerObject.userId, 
        title: innerObject.title,
        body: innerObject.body,
      };
  
      this.tabData.unshift(newData);
      console.log('ividethi');
      
      console.log(this.tabData);
    }
  }
  
}
