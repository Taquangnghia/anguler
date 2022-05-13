import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avata',
  templateUrl: './avata.component.html',
  styleUrls: ['./avata.component.css']
})
export class AvataComponent implements OnInit {
@Input () price:number;
@Input() avata:string;
  constructor() {
    this.price =0;
    this.avata=""
   }

  ngOnInit(): void {
  }

}
