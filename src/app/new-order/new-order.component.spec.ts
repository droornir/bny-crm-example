import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NewOrderComponent} from './new-order.component';
import {FormsModule} from '@angular/forms';

describe('NewOrderComponent', () => {
  let component: NewOrderComponent;
  let fixture: ComponentFixture<NewOrderComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [NewOrderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add to order', async () => {
    component.onNewOrderCustomerChange({target: {value: 1}});
    component.addProductToOrder();
    fixture.detectChanges();
    expect(component.order).toEqual({
      customerId: 1, products: [
        {productName: '', itemCost: undefined},
        {productName: '', itemCost: undefined}]
    });
  });
});
