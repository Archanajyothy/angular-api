import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{
  tabData: any;
  constructor(private apiService : ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.getData().
    subscribe((res: any)=> {this.tabData = res})
    //console.log(this.tabData);
  }

   
  
}
