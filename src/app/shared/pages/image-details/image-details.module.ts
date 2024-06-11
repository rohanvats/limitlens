import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageDetailsPageRoutingModule } from './image-details-routing.module';

import { ImageDetailsPage } from './image-details.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageDetailsPageRoutingModule,
    SharedModule,
  ],
  declarations: [ImageDetailsPage],
})
export class ImageDetailsPageModule {}
