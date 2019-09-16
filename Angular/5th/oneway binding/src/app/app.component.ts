import { Component, OnInit } from '@angular/core';
import{Animal} from './Animal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oneway';

public x:string;
public hello:boolean = false;
public animals : Animal[]=[
  { id: 1, name: 'Dog' },
  { id: 2, name: 'Lion' }
  
];

onchange(p: any){

this.animals.forEach(s=>{
  
  if(p!=-1){
  if(s.id==p){

      this.x = s.name;
      this.hello=true;
      }
  }
  else{
    this.hello=false;
  }
})
}



}
