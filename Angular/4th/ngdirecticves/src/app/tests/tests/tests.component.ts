import { Component, OnInit } from '@angular/core';
import { test } from '../../test';
import { tests } from '../../mock-test';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {
  tests =tests;

  public show:boolean = false;
  public show1:boolean = false;
  public buttonName:any = 'Show';

  constructor() { }

  ngOnInit() {
  }

  toggle1() {
    this.show1 = true;
    this.show = false;
  
  }
  toggle2() {
    this.show = true;
    this.show1 =false;
    
  }

}
