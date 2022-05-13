import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ten-sv',
  templateUrl: './ten-sv.component.html',
  styleUrls: ['./ten-sv.component.css']
})
export class TenSvComponent implements OnInit {



 @Input() name:any;
  ngOnInit(): void {

  }

}
