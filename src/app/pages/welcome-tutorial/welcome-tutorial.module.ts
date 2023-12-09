import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

import { WelcomeTutorialPageRoutingModule } from './welcome-tutorial-routing.module';

import { WelcomeTutorialPage } from './welcome-tutorial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomeTutorialPageRoutingModule,
    SharedModule,
  ],
  declarations: [WelcomeTutorialPage],
})
export class WelcomeTutorialPageModule {}
