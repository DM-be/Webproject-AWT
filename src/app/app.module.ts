import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DateTimePickerModule } from 'ng-pick-datetime';


import { ProductFormComponent } from './product-form/product-form.component';
import { NgbdModalBasicComponent } from './ngbd-modal-basic/ngbd-modal-basic.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    NgbdModalBasicComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule.forRoot(),
    DateTimePickerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


