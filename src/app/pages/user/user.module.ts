import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserPageRoutingModule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { UserPage } from './user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserPageRoutingModule,
    SharedModule,
    HttpClientModule,
  ],
  declarations: [UserPage],
})
export class UserPageModule {}
