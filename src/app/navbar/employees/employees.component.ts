import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';

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

     this.userForm = new FormGroup({
       firstName:new FormControl('',[Validators.required]),
       lastName:new FormControl('',[Validators.required]),
       email:new FormControl('',[Validators.required,Validators.email]),
       mobileNumber:new FormControl('',[Validators.required]),
       dob:new FormControl('',[Validators.required]),
     })
   }
   
   public addEmployee():void{
     this.listData.push(this.userForm.value);
   }
   public reset():void{
     this.userForm.reset()
   }
  ngOnInit(): void {
  }

}
