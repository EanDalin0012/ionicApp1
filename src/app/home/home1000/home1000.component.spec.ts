import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Home1000Component } from './home1000.component';

describe('Home1000Component', () => {
  let component: Home1000Component;
  let fixture: ComponentFixture<Home1000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home1000Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Home1000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
