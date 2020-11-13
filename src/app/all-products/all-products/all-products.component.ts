import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  products: any=[
    { 
      productId:1, 
      contact:8724908233,
      price: 1299,
      photoUrl:"https://cdn.shopify.com/s/files/1/0251/3007/4187/products/v1erRSr9rs_2000x.jpg?v=1602262305"
    },
    { 
      productId:2, 
      contact:8724908233,
      price: 3299,
      photoUrl:"https://cdn.shopify.com/s/files/1/0251/3007/4187/products/143_2000x.jpg?v=1572100434"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
