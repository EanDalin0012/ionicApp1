import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Account3000Component } from './account3000.component';

describe('Account3000Component', () => {
  let component: Account3000Component;
  let fixture: ComponentFixture<Account3000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Account3000Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Account3000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
