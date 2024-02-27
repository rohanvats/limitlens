import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SliderComponent } from 'src/app/shared/components/slider/slider.component';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FaceswapComponent } from './faceswap/faceswap.component';
import { FaceswapCategoryComponent } from './faceswap-category/faceswap-category.component';

@NgModule({
  declarations: [
    HomePage,
    SliderComponent,
    FaceswapComponent,
    FaceswapCategoryComponent,
  ],
  imports: [FormsModule, IonicModule, HomePageRoutingModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
