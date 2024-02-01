import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

import { UserAccountPageRoutingModule } from './user-account-routing.module';

import { UserAccountPage } from './user-account.page';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserSigninComponent } from './user-signin/user-signin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserAccountPageRoutingModule,
    SharedModule,
  ],
  declarations: [UserAccountPage, UserSignupComponent, UserSigninComponent],
})
export class UserAccountPageModule {}
