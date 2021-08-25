import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 feedbackForm = new FormGroup({
   userEmail:new FormControl(''),
  userName:new FormControl(''),
  userMobile:new FormControl(''),
  userDescription:new FormControl('')
 });

 onSubmit(){
   console.log(this.feedbackForm.value);
   
 }
}
