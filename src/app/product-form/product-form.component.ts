import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HAMBURGERS } from '../mock-hamburgers';
import { FRIES } from '../mock-fries';
import { Order } from '../order';




@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  hamburgers = HAMBURGERS;
  fries = FRIES;

  selectedFries = new Product("none", 0, 0)
  selectedHamburger = new Product("none", 0, 0)
  model = new Order("no name yet", "no email", this.selectedHamburger, this.selectedFries);
 
  

  

  constructor() { }

  stringify(o:any):string {
    return JSON.stringify(o);
  }

  ngOnInit() {
    console.log(this.model);
  }

  logObject()
  {
    console.log(this.model)
    var string = JSON.stringify(this.model)
    JSON.parse(string)
    console.log(string)
  }

  get diagnostic() { return JSON.stringify(this.model);
 

  }  }
