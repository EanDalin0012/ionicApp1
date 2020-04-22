import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Order100Component } from './order100.component';

describe('Order100Component', () => {
  let component: Order100Component;
  let fixture: ComponentFixture<Order100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Order100Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Order100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
