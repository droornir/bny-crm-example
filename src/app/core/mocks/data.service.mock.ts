import {Injectable} from '@angular/core';
import {IOrder} from '../../shared/interfaces';

@Injectable()
export class DataServiceMock {
  baseUrl = 'http://localhost:9876';
  customersBaseUrl = this.baseUrl + '/api/customers';
  ordersBaseUrl = this.baseUrl + '/api/orders';
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
  ordersCacheKey = 'cachedOrders';

  constructor() {
  }
}
