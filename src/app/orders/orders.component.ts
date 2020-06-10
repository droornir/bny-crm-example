import {Component, OnInit} from '@angular/core';

import {DataService} from '../core/services/data.service';
import {ICustomer, IOrderWrapper, IPagedResults} from '../shared/interfaces';
import {TrackByService} from '../core/services/trackby.service';
import {GrowlerMessageType, GrowlerService} from '../core/growler/growler.service';

@Component({
  selector: 'cm-customers-orders',
  templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit {

  shownCustomers: ICustomer[];
  totalRecords = 0;
  pageSize = 5;
  showAddOrderModal = false;
  allCustomers: ICustomer[] = [];
  currentPage = 1;

  constructor(private dataService: DataService,
              public trackbyService: TrackByService,
              private growler: GrowlerService) {
  }

  ngOnInit() {
    this.getCustomersPage(this.currentPage);
    this.getAllCustomers();
  }

  pageChanged(page: number) {
    this.currentPage = page;
    this.getCustomersPage(this.currentPage);
  }

  getCustomersPage(page: number) {
    this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
      .subscribe((response: IPagedResults<ICustomer[]>) => {
        this.totalRecords = response.totalRecords;
        this.shownCustomers = response.results;
      });
  }

  getAllCustomers() {
    this.dataService.getCustomers()
      .subscribe((response: any) => {
        this.allCustomers = response;
      });
  }

  showNewOrderForm() {
    this.showAddOrderModal = !this.showAddOrderModal;
  }

  handleNewOrder(event: IOrderWrapper) {
    this.submitOrder(event);
  }

  submitOrder(newOrder: IOrderWrapper) {
    this.dataService.insertOrder(newOrder).subscribe((response: IOrderWrapper) => {
      if (response) {
        this.growler.growl('New order added successfully', GrowlerMessageType.Success);
        this.getCustomersPage(this.currentPage);
        this.showAddOrderModal = false;
      } else {
        this.growler.growl('Unable to insert new order', GrowlerMessageType.Danger);
      }
    });
  }
}
