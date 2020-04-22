import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Order200Component } from './order200.component';

describe('Order200Component', () => {
  let component: Order200Component;
  let fixture: ComponentFixture<Order200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Order200Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Order200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
