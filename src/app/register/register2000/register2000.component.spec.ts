import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Register2000Component } from './register2000.component';

describe('Register2000Component', () => {
  let component: Register2000Component;
  let fixture: ComponentFixture<Register2000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register2000Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Register2000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
