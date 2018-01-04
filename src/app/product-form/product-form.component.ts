import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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


export class ProductFormComponent {

  constructor() {}
  hamburgers = HAMBURGERS;
  fries = FRIES;
  snacks = SNACKS;
  sauces = SAUCES;

  submitted = false;
  onSubmit() { this.submitted = true; }

  price: number;
  selectedFries = new Product("geen", 0, 0)
  selectedHamburger = new Product("geen", 0, 0)
  selectedSnack = new Product("geen", 0, 0)
  selectedSauce = new Product("geen", 0, 0)
  model = new Order("", "", this.selectedHamburger, this.selectedFries, this.selectedSnack, this.selectedSauce);
  

  updatePrice(): void {
    this.price = 0;
    this.price += this.model.hamburger.price
    this.price += this.model.friet.price;
    this.price += this.model.sauce.price;
    this.price += this.model.snack.price;
  }

  get diagnostic(): string {
    return JSON.stringify(this.model);

  }

  get currentPrice(): number 
  {
    return this.price;
  }
  confirmOrder(): void
  {
    alert("uw bestelling is onderweg!")
    console.log(JSON.stringify(this.model))
    // send to backend here 
  }
}
