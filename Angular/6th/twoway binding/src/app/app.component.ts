import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'twoway';
  public show: boolean=false;

  public name: string;
 public Displaylowercase:string ="";
 public Displayuppercase: string ="";

 public caseDivide(){
   this.Displaylowercase = this.name.toLowerCase();
   this.Displayuppercase = this.name.toUpperCase();
   this.show= true;
  
 }
}
