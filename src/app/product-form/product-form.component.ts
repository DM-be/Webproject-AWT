import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Order } from '../order';
import { HAMBURGERS } from '../mock-hamburgers';
import { FRIES } from '../mock-fries';
import { SNACKS } from '../mock-snacks';
import { SAUCES } from '../mock-sauces';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  hamburgers = HAMBURGERS;
  fries = FRIES;
  snacks = SNACKS;
  sauces = SAUCES;

  price: number;
  selectedFries = new Product("none", 0, 0)
  selectedHamburger = new Product("none", 0, 0)
  selectedSnack = new Product("none", 0, 0)
  selectedSauce = new Product("none", 0, 0)
  model = new Order("", "", this.selectedHamburger, this.selectedFries, this.selectedSnack, this.selectedSauce);
  constructor() {}

  ngOnInit() {

  }

  updatePrice(): void {
    this.price = 0;
    this.price += this.model.hamburger.price
    this.price += this.model.friet.price;
  }

  logObject() {
  }

  get diagnostic() {
    return JSON.stringify(this.model);
    
  }
}
