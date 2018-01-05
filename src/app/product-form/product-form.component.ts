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
  onSubmit(): void { this.submitted = true; }
  selectedFries = new Product("geen", 0, 0)
  selectedHamburger = new Product("geen", 0, 0)
  selectedSnack = new Product("geen", 0, 0)
  selectedSauce = new Product("geen", 0, 0)
  model = new Order("", "", this.selectedHamburger, this.selectedFries, this.selectedSnack, this.selectedSauce,0);
  get diagnostic(): string {
    return JSON.stringify(this.model);
  }
  updatePrice(): void
  {
    this.model.updatePrice();

  }

  confirmOrder(): void
  {
    alert("uw bestelling is onderweg! zie console log voor de verzonden data" )
    document.querySelector('#closeButton').click(); 
    console.log(JSON.stringify(this.model))
    // send to backend here 
  }



  
}
