import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Product2000Component } from './product2000.component';

describe('Product2000Component', () => {
  let component: Product2000Component;
  let fixture: ComponentFixture<Product2000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product2000Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Product2000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
