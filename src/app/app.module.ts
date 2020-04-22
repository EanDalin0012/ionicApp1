import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Router } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutTabComponent } from './layout/layout-tab/layout-tab.component';
import { LayoutBlankComponent } from './layout/layout-blank/layout-blank.component';

@NgModule({
  declarations: [AppComponent, LayoutTabComponent, LayoutBlankComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    // this.router.navigate(['/tab/tab-home']);
  }
}
