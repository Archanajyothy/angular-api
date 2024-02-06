import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{
  tabData: any[] = [];
  newArray: any[] = []

  constructor(private apiService : ApiServiceService) { }

  apiUrl = 'https://jsonplaceholder.typicode.com/posts'

  ngOnInit(): void {
    this.apiService.getData(this.apiUrl).
    subscribe((res: any)=> {
      this.tabData = res
    })


    this.apiService.behaviorSubject.subscribe((res) => {
      this.newArray = Object.values(res)
      console.log('from newTabData');
       //console.log(this.newArray);
       this.appendData()
    })
  }
  
  appendData(){    
    if (this.newArray && this.newArray.length > 0 ) {
      const arrIndex = this.newArray.length-2
      this.tabData.unshift(this.newArray[arrIndex]);
      console.log(this.tabData);
    }
  }
  
}
