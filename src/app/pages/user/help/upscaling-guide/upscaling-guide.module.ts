import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpscalingGuidePageRoutingModule } from './upscaling-guide-routing.module';

import { UpscalingGuidePage } from './upscaling-guide.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    UpscalingGuidePageRoutingModule,
  ],
  declarations: [UpscalingGuidePage],
})
export class UpscalingGuidePageModule {}
