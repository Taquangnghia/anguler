import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  student  = [
    {
      name:"nghiadz",
      price:300,
      satus:0
    },
    {
      name:"nghiadz",
      price:300,
      satus:1
    },
    {
      name:"nghiadz",
      price:500,
      satus:1
    }
  ]
  champ = [
    {
      id:1,
      name:"yasuo",
      dame:300,
      defend:30,
      speed:210,
      price:6300,
      avatar:"https://cdn.tgdd.vn/2020/09/content/lucian-lol-high-noon-splash-art-uhdpaper.com-8K-282-wp.thumbnail-800x449.jpg"
    },
    {
      id:2,
      name:"tf",
      dame:150,
      defend:30,
      speed:210,
      price:1300,
      avatar:"https://cdn.tgdd.vn/2020/09/content/lucian-lol-high-noon-splash-art-uhdpaper.com-8K-282-wp.thumbnail-800x449.jpg"
    },
    {
      id:3,
      name:"kennen",
      dame:100,
      defend:20,
      speed:230,
      price:6300,
      avatar:"https://cdn.tgdd.vn/2020/09/content/lucian-lol-high-noon-splash-art-uhdpaper.com-8K-282-wp.thumbnail-800x449.jpg"
    },
   
  
  ]
  SVname="nghia123";
  maSV="ph123"
}
