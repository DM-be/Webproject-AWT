import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HAMBURGERS } from '../mock-hamburgers';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  hamburgers = HAMBURGERS;

  product: Product = {
    name: 'Kleine frieten',
    price: 1,
    quantity: 0,
    showAddToCart: false,
    addedToCart: false
  }

  constructor() { }

  ngOnInit() {
  }

}
