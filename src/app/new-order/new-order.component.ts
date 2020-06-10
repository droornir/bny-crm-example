import {Component, OnInit, Input, ViewChild, Output, EventEmitter} from '@angular/core';
import {NgForm} from '@angular/forms';

import {IOrderWrapper, ICustomer} from '../shared/interfaces';

@Component({
  selector: 'cm-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  order: IOrderWrapper;
  errorMessage: string;
  @Input() allCustomers: ICustomer[];
  @Output() newOrderEmitter: EventEmitter<IOrderWrapper>;
  @ViewChild('newOrderForm', {static: true}) newOrderForm: NgForm;

  constructor() {
    this.order = {customerId: 0, products: [{productName: '', itemCost: undefined}]};
    this.newOrderEmitter = new EventEmitter<IOrderWrapper>();
  }

  ngOnInit(): void {
  }

  onNewOrderCustomerChange(event) {
    this.order.customerId = event.target.value;
  }

  addProductToOrder() {
    this.order.products.push({productName: '', itemCost: undefined});
  }

  submit() {
    this.newOrderEmitter.emit(this.order);
  }
}
