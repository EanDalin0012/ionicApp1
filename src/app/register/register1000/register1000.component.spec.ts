import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Register1000Component } from './register1000.component';

describe('Register1000Component', () => {
  let component: Register1000Component;
  let fixture: ComponentFixture<Register1000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register1000Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Register1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
