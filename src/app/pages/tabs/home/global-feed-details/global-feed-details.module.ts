import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlobalFeedDetailsPageRoutingModule } from './global-feed-details-routing.module';

import { GlobalFeedDetailsPage } from './global-feed-details.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobalFeedDetailsPageRoutingModule,
    SharedModule
  ],
  declarations: [GlobalFeedDetailsPage]
})
export class GlobalFeedDetailsPageModule {}
