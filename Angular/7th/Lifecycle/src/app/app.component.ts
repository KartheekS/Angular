import { Component,  OnInit } from '@angular/core';
import {FormBuilder, Validators, FormArray} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Lifecycle';
  s:any[];
  date: any;
  countries:any[];
  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    age: ['', Validators.required],
    address: this.fb.group({
      count: ['', Validators.required],
      state: ['', Validators.required]
      
    })
  });
  

  states : any[] =[
    {cid :1, states :['S1', 'S2', 'S3']},
    {cid :2, states :['S4', 'S5', 'S6']},
    {cid :3, states :['S7', 'S8', 'S9']},
  ];
  
  loadstates(cnid : any){
    this.states.forEach(e => { 
      if(e.cid == cnid){
        this.s= e.states;
      }
      else if(cnid == -1){
        this.s = null;

      }
      
      
    });
  }

  ngOnInit(){
    this.countries  =[
      {id : 1, name : 'C1'},
      {id : 2, name : 'C2'},
      {id : 3, name : 'C3'}
      ];
    this.date = new Date().toLocaleString();
    
    console.log("ng init ::: Countries binded to DDL")


  }

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.profileForm.reset();
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

}
