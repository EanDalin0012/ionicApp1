import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { TabShareModule } from '../tab/tab-share.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductRoutingModule,
    TabShareModule
  ],
  declarations: [],
  entryComponents: []
})
export class ProductModule {}
