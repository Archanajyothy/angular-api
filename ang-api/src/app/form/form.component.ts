import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';
import { NotifierService } from '../services/notifier.service';
import { error } from 'console';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {

  constructor(private apiService : ApiServiceService, private toast: NotifierService){}

  myForm = new FormGroup({
    userId: new FormControl('',[Validators.required, Validators.maxLength(7)]),
    id: new FormControl('',[Validators.required, Validators.email]),
    title: new FormControl('',[Validators.required]),
    body: new FormControl('',[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^[0-9]{10}$')])
  })
  
  formData : any[] = [];

  ngOnInit(): void {}

  apiUrl = 'https://jsonplaceholder.typicode.com/posts'

  submitForm(){
    this.formData.push(this.myForm.value)
    this.apiService.postData(this.formData, this.apiUrl).subscribe((res) => {
      this.toast.showSuccess("Successfully submitted")
      this.apiService.behaviorSubject.next(res) 
    },
    (error: any) => {
      console.log("Error occured");
      
        this.toast.showError('Error occured')
    })

    this.myForm.reset() 
  }

}
