import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home1000Component } from '../home/home1000/home1000.component';
import { Order100Component } from '../order/order100/order100.component';
import { Product1000Component } from '../product/product1000/product1000.component';

const routes: Routes = [
      { path: '', redirectTo: 'tab-home', pathMatch: 'full' },
      { path: 'tab-home', component: Home1000Component },
      { path: 'tab-product', component: Product1000Component },
      { path: 'tab-order', component: Order100Component },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabRoutingModule { }
