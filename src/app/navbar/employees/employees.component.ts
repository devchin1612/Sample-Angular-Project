import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
   userForm : FormGroup ;
   listData:any;

   constructor(private fb:FormBuilder){
    this.listData=[];

     this.userForm = this.fb.group({
       firstName:['',Validators.required],
       lastName:['',Validators.required],
       email:['',Validators.required],
       mobileNumber:['',Validators.required],
       dob:['',Validators.required],
     })
   }
   
   public addEmployee():void{
     this.listData.push(this.userForm.value);
   }
  ngOnInit(): void {
  }

}
