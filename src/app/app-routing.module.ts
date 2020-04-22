import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutBlankComponent } from './layout/layout-blank/layout-blank.component';
import { LayoutTabComponent } from './layout/layout-tab/layout-tab.component';

const routes: Routes = [
  { path: '', redirectTo: 'tab', pathMatch: 'full' },
  { path: 'home', component: LayoutBlankComponent, loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'acc', component: LayoutBlankComponent, loadChildren: () => import('./account/account.module').then( m => m.AccountModule)},
  { path: 'acc', component: LayoutBlankComponent, loadChildren: () => import('./account/account.module').then( m => m.AccountModule)},
  { path: 'tab', component: LayoutTabComponent, loadChildren: () => import('./tab/tab.module').then( m => m.TabModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
