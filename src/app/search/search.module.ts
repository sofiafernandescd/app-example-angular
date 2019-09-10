import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSearchComponent } from './form-search/form-search.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormSearchComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  exports: [
    FormSearchComponent,
    SearchModule
  ]
})
export class SearchModule { }
