import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-indentity',
  templateUrl: './indentity.component.html',
  styleUrls: ['./indentity.component.css']
})
export class IndentityComponent implements OnInit {
  @Input() maSV :string;
  constructor() { 
  // dinh nghia gt mac dinh cho kieu string
  this.maSV ='';
  }

  ngOnInit(): void {
  
  }

}
