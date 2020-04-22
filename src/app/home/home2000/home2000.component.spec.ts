import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Home2000Component } from './home2000.component';

describe('Home2000Component', () => {
  let component: Home2000Component;
  let fixture: ComponentFixture<Home2000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home2000Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Home2000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
