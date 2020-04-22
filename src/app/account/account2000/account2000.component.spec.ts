import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Account2000Component } from './account2000.component';

describe('Account2000Component', () => {
  let component: Account2000Component;
  let fixture: ComponentFixture<Account2000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Account2000Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Account2000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
