import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NewOrderComponent} from './new-order.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [NewOrderComponent],
  exports: [
    NewOrderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class NewOrderModule {}
