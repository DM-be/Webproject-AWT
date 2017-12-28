import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HAMBURGERS } from '../mock-hamburgers';
import { FRIES } from '../mock-fries';
import { SNACKS } from '../mock-snacks';
import { SAUCES } from '../mock-sauces';

import { Order } from '../order';




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

  price:number;
  en: any;

  selectedFries = new Product("none", 0, 0)
  selectedHamburger = new Product("none", 0, 0)
  selectedSnack = new Product("none", 0, 0)
  selectedSauce = new Product("none", 0, 0)

  model = new Order("", "",  this.selectedHamburger, this.selectedFries, this.selectedSnack, this.selectedSauce);
  
  
  constructor() { }

  ngOnInit() {
    console.log(this.model);
    
  }

  updatePrice() :void
  { 
    this.price = 0;
    this.price += this.model.hamburger.price
    this.price += this.model.friet.price;
  }

  logObject()
  {
    console.log(this.model)
    var string = JSON.stringify(this.model)
    JSON.parse(string)
    console.log(string)
    console.log(this.model.hamburger.price)
  }

  get diagnostic() { return JSON.stringify(this.model);
 

  }  }
