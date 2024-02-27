import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { DisplayOptions } from 'src/app/interfaces/displayOptions.interface';
import { PromptModalComponent } from './prompt-modal/prompt-modal.component';
import { FilterModalComponent } from './filter-modal/filter-modal.component';
import { DisplayOptionsService } from 'src/app/services/displayOptions.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  image = '';
  promptPlaceholder = 'Example : This photos as Indiana Jones';
  usingGlobalFeed = false;
  displayOptions: DisplayOptions[];

  constructor(
    private modalCtrl: ModalController,
    public displayOptionsService: DisplayOptionsService
  ) {}

  ngOnInit() {
    this.getDisplayOptions();
  }

  getDisplayOptions() {
    this.displayOptionsService
      .fetchDisplayOptions()
      .subscribe((displayOptions) => {
        this.displayOptions = displayOptions;
      });
  }

  openPromptModal() {
    this.modalCtrl
      .create({
        component: PromptModalComponent,
      })
      .then((modalEl) => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then((action) => {
        if (action?.role === 'confirm') {
          if (!action?.data) {
            return;
          }
          this.promptPlaceholder = action?.data;
        } else if (action?.role === 'cancel') {
          return;
        }
      });
  }

  onImagePicked(imagedata: any) {
    if (imagedata) {
      this.image = imagedata;
    }
  }

  openFilterModal(filterType: string) {
    this.modalCtrl
      .create({
        component: FilterModalComponent,
        componentProps: {
          filterType,
        },
      })
      .then((modalEl) => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then((result) => {
        const element = this.displayOptions.find(
          (el) => el.value === result.data.key
        );
        if (element) {
          element.name = result.data.name;
          element.url = result.data.styleImage;
        } else {
          return;
        }
      });
  }

  onSavePrompt() {
    const filterOptions = this.displayOptions.reduce(
      (result: any, currentObject: any) => {
        result[currentObject.value] = currentObject.name;
        return result;
      },
      {}
    );
    console.log({
      image: this.image,
      prompt: this.promptPlaceholder,
      filters: filterOptions,
    });
  }
}
