import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { OrderRoutingModule } from './order-routing.module';
import { TabShareModule } from '../tab/tab-share.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderRoutingModule,
    TabShareModule
  ],
  declarations: [],
  entryComponents: []
})
export class OrderModule {}
