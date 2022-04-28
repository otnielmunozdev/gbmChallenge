import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataTypeView:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  typeView(){

    this.dataTypeView = !this.dataTypeView;

  }

}
