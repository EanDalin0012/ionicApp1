import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Product3000Component } from './product3000.component';

describe('Product3000Component', () => {
  let component: Product3000Component;
  let fixture: ComponentFixture<Product3000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product3000Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Product3000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
