import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrderComponent } from './new-order.component';
import {DataServiceMock} from '../core/mocks/data.service.mock';
import {DataService} from '../core/services/data.service';

describe('NewOrderComponent', () => {
  let component: NewOrderComponent;
  let fixture: ComponentFixture<NewOrderComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrderComponent ],
      providers: [{provide: DataService, useClass: DataServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
