import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HomeRoutingModule } from './home-routing.module';
import { TabShareModule } from '../tab/tab-share.module';
import { Home2000Component } from './home2000/home2000.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule,
    TabShareModule
  ],
  declarations: [HomePage, Home2000Component]
})
export class HomePageModule {}
