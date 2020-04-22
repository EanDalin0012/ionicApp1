import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountRoutingModule } from './account-routing.module';
import { TabShareModule } from '../tab/tab-share.module';
import { Account1000Component } from './account1000/account1000.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountRoutingModule,
    TabShareModule
  ],
  declarations: [
  ],
  entryComponents: []
})
export class AccountModule {}
