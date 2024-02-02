import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  constructor(private apiService : ApiServiceService){}

  myForm = new FormGroup({
    userId: new FormControl('',[Validators.required]),
    id: new FormControl('',[Validators.required, Validators.email]),
    title: new FormControl('',[Validators.required]),
    body: new FormControl('',[Validators.required, Validators.minLength(0)])
  })
  
  formData : any[] = [];

  ngOnInit(): void {

  }

  submitForm(){
    this.formData.push(this.myForm.value)
    this.apiService.postData(this.formData).subscribe((res) => {
      this.apiService.behaviorSubject.next(res)

      // console.log(this.formData);
    })

        
  }

}
