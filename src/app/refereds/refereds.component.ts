import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refereds',
  templateUrl: './refereds.component.html',
  styleUrls: ['./refereds.component.css']
})
export class ReferedsComponent implements OnInit {

  referredData: any = [];

  constructor() { }

  ngOnInit(): void {
    
  }

  showReference(dataItem){

  }

}
