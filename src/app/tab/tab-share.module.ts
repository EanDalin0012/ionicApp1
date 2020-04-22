import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TabRoutingModule } from './tab-routing.module';
import { Account1000Component } from '../account/account1000/account1000.component';
import { Home1000Component } from '../home/home1000/home1000.component';
import { Register1000Component } from '../register/register1000/register1000.component';
import { Product1000Component } from '../product/product1000/product1000.component';
import { Order100Component } from '../order/order100/order100.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabRoutingModule
  ],
  declarations: [
    Account1000Component,
    Home1000Component,
    Register1000Component,
    Product1000Component,
    Order100Component
  ],
  exports: [
    Account1000Component,
    Home1000Component,
    Register1000Component,
    Product1000Component,
    Order100Component
  ],
  entryComponents: []
})
export class TabShareModule {}
