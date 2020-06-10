import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OrdersComponent} from './orders.component';
import {DataServiceMock} from '../core/mocks/data.service.mock';
import {DataService} from '../core/services/data.service';
import {TrackByService} from '../core/services/trackby.service';
import {TrackbyServiceMock} from '../core/mocks/trackby.service.mock';
import {GrowlerService} from '../core/growler/growler.service';
import {GrowlerServiceMock} from '../core/mocks/growler.service.mock';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersComponent],
      providers: [{provide: DataService, useClass: DataServiceMock},
        {provide: TrackByService, useClass: TrackbyServiceMock},
        {provide: GrowlerService, useClass: GrowlerServiceMock}]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should get all customers', async () => {
    await component.getAllCustomers();
    expect(component.currentPage).toEqual(1);
    expect(component.pageSize).toEqual(5);
    expect(component.showAddOrderModal).toEqual(false);
    expect(component.allCustomers).toEqual(expectedCustomersArray);
  });
});

const expectedCustomersArray = [{
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
