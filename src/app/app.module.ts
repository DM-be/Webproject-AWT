import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DateTimePickerModule } from 'ng-pick-datetime';


import { ProductFormComponent } from './product-form/product-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DateTimePickerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


