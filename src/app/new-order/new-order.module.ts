import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {NewOrderComponent} from './new-order.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [NewOrderComponent],
  exports: [
    NewOrderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class NewOrderModule { }
