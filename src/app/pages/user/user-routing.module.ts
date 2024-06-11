import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPage } from './user.page';
import { AuthGuard } from 'src/app/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: UserPage,
  },
  {
    path: 'user-info',
    loadChildren: () =>
      import('./user-account/user-account.module').then(
        (m) => m.UserAccountPageModule
      ),
  },
  {
    path: 'subscription',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./subscription/subscription.module').then(
        (m) => m.SubscriptionPageModule
      ),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./orders/orders.module').then((m) => m.OrdersPageModule),
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./settings/settings.module').then((m) => m.SettingsPageModule),
  },
  {
    path: 'help',
    loadChildren: () =>
      import('./help/help.module').then((m) => m.HelpPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((m) => m.RegisterPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
