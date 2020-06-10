import {Injectable} from '@angular/core';
import {IOrder} from '../../shared/interfaces';
import {defer} from 'rxjs';

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
}
