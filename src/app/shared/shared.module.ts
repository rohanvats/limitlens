import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { MainImageComponent } from './components/main-image/main-image.component';
import { CustomCardButtonComponent } from './components/custom-card-button/custom-card-button.component';
import { MainActionButtonComponent } from './components/main-action-button/main-action-button.component';
import { ImagePickerComponent } from './components/image-picker/image-picker.component';
import { MasonryGalleryComponent } from './components/masonry-gallery/masonry-gallery.component';
import { CustomRadioGroupComponent } from './components/custom-radio-group/custom-radio-group.component';
// import { SliderComponent } from './components/slider/slider.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { SkeletonLoaderComponent } from './components/skeleton-loader/skeleton-loader.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    MainImageComponent,
    CustomCardButtonComponent,
    MainActionButtonComponent,
    ImagePickerComponent,
    MasonryGalleryComponent,
    CustomRadioGroupComponent,
    AppHeaderComponent,
    SkeletonLoaderComponent,
  ],
  imports: [CommonModule, RouterModule, IonicModule, ReactiveFormsModule],
  exports: [
    MainImageComponent,
    CustomCardButtonComponent,
    MainActionButtonComponent,
    ImagePickerComponent,
    MasonryGalleryComponent,
    SkeletonLoaderComponent,
    CustomRadioGroupComponent,
    AppHeaderComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
})
export class SharedModule {}
