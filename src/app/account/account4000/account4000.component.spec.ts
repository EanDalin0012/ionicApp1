import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Account4000Component } from './account4000.component';

describe('Account4000Component', () => {
  let component: Account4000Component;
  let fixture: ComponentFixture<Account4000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Account4000Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Account4000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
