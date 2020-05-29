import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  goBack():void{
    this.location.back();
    console.log('goBack()')
  }
}
