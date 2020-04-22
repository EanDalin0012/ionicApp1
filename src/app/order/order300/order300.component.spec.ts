import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Order300Component } from './order300.component';

describe('Order300Component', () => {
  let component: Order300Component;
  let fixture: ComponentFixture<Order300Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Order300Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Order300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
