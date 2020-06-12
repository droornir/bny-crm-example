import {Injectable} from '@angular/core';
import {IOrder, IOrderWrapper, ICustomer} from '../../shared/interfaces';
import {defer, Observable} from 'rxjs';

@Injectable()
export class DataServiceMock {
  orders: IOrder[];
  customers =  [{
    'id': 1,
    'firstName': 'ted',
    'lastName': 'james',
    'gender': 'male',
    'address': '1234 Anywhere St.',
    'city': ' Phoenix ',
    'state': {
      'abbreviation': 'AZ',
      'name': 'Arizona'
    },
    'orders': [
      {'productName': 'Basketball', 'itemCost': 7.99},
      {'productName': 'Shoes', 'itemCost': 199.99}
    ],
    'latitude': 33.299,
    'longitude': -111.963
  }];
  allCustomers = this.customers;
  ordersCacheKey = 'cachedOrders';

  constructor() {
  }
  getCustomersPage(page: number, pageSize: number) {
    return defer(() => Promise.resolve(this.customers));
  }
  getCustomers() {
    return defer(() => Promise.resolve(this.customers));
  }
  getAllCustomers() {
    return defer(() => Promise.resolve(this.customers));
  }
  insertOrder(newOrder: IOrderWrapper) {
    this.mockInsertNewOrder(newOrder);
    this.calculateCustomersOrderTotal(this.customers);
    return defer(() => Promise.resolve(this.customers));
  }
  mockInsertNewOrder(newOrder: IOrderWrapper) {
    let customerId = newOrder.customerId;
    let orderProducts = newOrder.products;
    let customer = this.customers.find(customer => customer.id.toString() == customerId.toString());

    if(!customer.orders){
      customer.orders = orderProducts;
    }
    customer.orders = orderProducts.concat(customer.orders);
    }
    calculateCustomersOrderTotal(customers: ICustomer[]) {
      for (const customer of customers) {
        if (customer && customer.orders) {
          let total = 0;
          for (const order of customer.orders) {
            total += order.itemCost;
          }
          customer.orderTotal = total;
        }
      }
    }
}
