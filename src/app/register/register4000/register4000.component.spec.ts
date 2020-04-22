import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Register4000Component } from './register4000.component';

describe('Register4000Component', () => {
  let component: Register4000Component;
  let fixture: ComponentFixture<Register4000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register4000Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Register4000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
