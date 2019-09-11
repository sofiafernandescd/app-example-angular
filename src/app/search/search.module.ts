import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSearchComponent } from './form-search/form-search.component';
import { FormsModule } from '@angular/forms';
import { ListOwnersComponent } from './list-owners/list-owners.component';
import { OwnerService } from './services/owner.service';
import {HttpClientModule} from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [FormSearchComponent, 
    ListOwnersComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule
  ],
  exports: [
    FormSearchComponent,
    ListOwnersComponent
  ],
  providers: [OwnerService]
})
export class SearchModule { }
