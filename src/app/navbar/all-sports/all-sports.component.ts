import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/test.service';




@Component({
  selector: 'app-all-sports',
  templateUrl: './all-sports.component.html',
  styleUrls: ['./all-sports.component.scss']
})
export class AllSportsComponent implements OnInit {

  selectedItemList : any[] = [];
 checkboxDataList : any[] = [];
  checkedIds = [];
  
 
   constructor(
     private sportsService: TestService
   ){}
 
   ngOnInit(): void {
     this.checkboxDataList = this.sportsService.sportsList; 
     this.selectedItems();
    //  this.fetchCheckedIDs();
   }
 
   onChange() {
     this.selectedItems();
   }
 
   selectedItems(){
     this.selectedItemList=this.checkboxDataList.filter((value , index) => {
       return value.isChecked
     });
   }
 
  //  fetchCheckedIDs(){
  //    this.checkedIds = [];
  //    this.checkboxDataList.forEach((value  , index) => {
  //      if(value.isChecked){
  //        this.checkedIds.push(value.id);
  //      }
  //    })
  //  }
 
  
 
 }
 