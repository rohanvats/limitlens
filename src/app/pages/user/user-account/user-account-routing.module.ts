import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAccountPage } from './user-account.page';
import { UserSigninComponent } from './user-signin/user-signin.component';

const routes: Routes = [
  {
    path: '',
    component: UserAccountPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserAccountPageRoutingModule {}
