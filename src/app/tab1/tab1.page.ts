import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  restaurantes:any = [];
  productos:any = [];

  constructor(private api:ApiService) {}

  ngOnInit() {
    this.api.restaurantes().subscribe((res)=>{
      this.restaurantes = res;
      
      console.log(res);
    });
    this.api.productos().subscribe((prod)=>{
      this.productos = prod;
      console.log(prod);
    });
  }
}

// ngOnInit() {
//   this.api.productos().subscribe((prod)=>{
//     this.productos = prod;
//     console.log(prod);
//   });
// }
// }
