import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  constructor(private apiService : ApiServiceService){}

  myForm = new FormGroup({
    formId: new FormControl(''),
    formEmail: new FormControl(''),
    formTitle: new FormControl(''),
    formMobNo: new FormControl('')
  })

  formData : any[] = [];

  ngOnInit(): void {

  }

  submitForm(){
    this.formData.push(this.myForm.value)
    this.apiService.postData(this.formData).subscribe((res) => {
      console.log(this.formData);
      
    })

        
  }

}
