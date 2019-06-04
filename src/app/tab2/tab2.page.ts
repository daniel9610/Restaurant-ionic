import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
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
