import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Account1000Component } from './account1000.component';

describe('Account1000Component', () => {
  let component: Account1000Component;
  let fixture: ComponentFixture<Account1000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Account1000Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Account1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
