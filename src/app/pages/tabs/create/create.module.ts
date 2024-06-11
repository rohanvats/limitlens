import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePageRoutingModule } from './create-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { CreatePage } from './create.page';
import { PromptModalComponent } from './prompt-modal/prompt-modal.component';
import { FilterModalComponent } from './filter-modal/filter-modal.component';
import { ToastService } from 'src/app/helper/toast.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreatePageRoutingModule,
    SharedModule,
  ],
  providers: [ToastService],
  declarations: [CreatePage, PromptModalComponent, FilterModalComponent],
})
export class CreatePageModule {}
