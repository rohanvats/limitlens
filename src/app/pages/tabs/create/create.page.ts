import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

import { FilterModalComponent } from './filter-modal/filter-modal.component';
import { DisplayOptionsService } from 'src/app/services/displayOptions.service';
import { CreateService } from './create.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  image = '';
  positivePrompt = '';
  usingGlobalFeed = false;
  showNegativePrompt = false;
  displayOptions: any;
  user_uuid: string;
  showSpinner = false;

  customCounterFormatter(event) {
    // console.log('aaa..', event);
    // fromEvent(event)
    // return `${maxLength - inputLength} words remaining`;
  }

  constructor(
    private modalCtrl: ModalController,
    public displayOptionsService: DisplayOptionsService,
    private createService: CreateService,
    private authService: AuthService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.createService.getDisplayOptions();
    this.getDisplayOptions();
  }

  getDisplayOptions() {
    this.displayOptionsService
      .fetchDisplayOptions()
      .subscribe((displayOptions) => {
        this.displayOptions = displayOptions;
      });
  }

  // openPromptModal() {
  //   this.modalCtrl
  //     .create({
  //       showBackdrop: true,
  //       initialBreakpoint: 0.4,
  //       mode: 'ios',
  //       component: PromptModalComponent,
  //     })
  //     .then((modalEl) => {
  //       modalEl.present();
  //       return modalEl.onDidDismiss();
  //     })
  //     .then((action) => {
  //       if (action?.role === 'confirm') {
  //         if (!action?.data) {
  //           return;
  //         }
  //         this.promptPlaceholder = action?.data;
  //       } else if (action?.role === 'cancel') {
  //         return;
  //       }
  //     });
  // }

  toggleNegavtivePrompt(event) {
    this.showNegativePrompt = event.detail.checked ? true : false;
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
          (el) => el.value === result.data?.key
        );
        if (element) {
          if (element.value === 'format') {
            element.name = result.data.name;
            switch (result.data.name) {
              case 'portrait':
                element.url = 'assets/icon/@2x-format_vertical.png';
                break;
              case 'square':
                element.url = 'assets/icon/@2x-format_square.png';
                break;
              case 'landscape':
                element.url = 'assets/icon/@2x-format_landscape.png';
                break;
            }
          } else {
            element.id = result.data.id;
            element.name = result.data.name;
            element.url = result.data.temporaryUrl;
          }
        } else {
          return;
        }
      });
  }

  onSavePrompt() {
    this.showSpinner = true;
    this.authService.checkUserUUID().subscribe((data) => {
      this.user_uuid = data;
    });
    const filterOptions = this.displayOptions.reduce(
      (result: any, currentObject: any) => {
        result[`id_${currentObject.value}`] = currentObject.id;
        return result;
      },
      {}
    );

    const generateImagePayload = {
      type: 1,
      user_prompt: this.positivePrompt,
      ...filterOptions,
      user_uuid: this.user_uuid,
    };

    this.createService
      .generateImage(generateImagePayload, this.user_uuid)
      .subscribe(
        (data) => {
          console.log('generated image...', data);
          this.navCtrl.navigateForward('/tabs/create/generatedImage', {
            queryParams: { url: data.data.imageUrl, gallery: false },
          });
          this.showSpinner = false;
        },
        (error) => {
          this.showSpinner = false;
        }
      );
  }
}
