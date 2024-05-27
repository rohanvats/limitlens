import { Component, OnDestroy, OnInit, SimpleChange } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

import { DisplayOptionsService } from 'src/app/services/displayOptions.service';
import { CreateService } from './create.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/helper/toast.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit, OnDestroy {
  imageUUID: string;
  image = '';
  positivePrompt = '';
  negativePrompt = '';
  usingGlobalFeed = false;
  showNegativePrompt = false;
  displayOptions: any;
  user_uuid: string;
  // showSpinner = false;

  userUUIDSub: Subscription;

  customCounterFormatter(event) {}

  getImage(event) {
    console.log('abcd..', event);
    this.imageUUID = event;
  }

  onChange(changes: SimpleChange) {
    if (changes) {
      console.log('abcd..', this.imageUUID);
    }
  }

  constructor(
    public displayOptionsService: DisplayOptionsService,
    private createService: CreateService,
    private authService: AuthService,
    private navCtrl: NavController,
    public toastService: ToastService
  ) {}

  ngOnInit() {
    this.createService.getDisplayStyles();
    this.displayOptions = this.displayOptionsService.fetchDisplayOptions();
  }

  toggleNegavtivePrompt(event) {
    this.showNegativePrompt = event.detail.checked ? true : false;
  }

  onImagePicked(imagedata: any) {
    if (imagedata) {
      this.image = imagedata;
    }
  }

  openFilterModal(filterType: string) {
    this.createService.openFilterModal(filterType);
  }

  onSavePrompt() {
    if (this.positivePrompt == '') {
      this.toastService.PresentToast('Please enter the prompt');
      return;
    }
    if (!this.checkOptionsFilled()) {
      this.toastService.PresentToast('Please select all the options');
      return;
    }

    // this.showSpinner = true;
    this.toastService.toggleSpinner(true);
    this.userUUIDSub = this.authService.checkUserUUID().subscribe((data) => {
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
      user_negative_prompt: this.negativePrompt,
      ...filterOptions,
      uuid_uploaded_image: this.imageUUID,
      user_uuid: this.user_uuid,
    };

    this.createService
      .generateImage(generateImagePayload, this.user_uuid)
      .subscribe({
        next: (data) => {
          console.log('generated image...', data);
          this.resetPrompts();
          this.navCtrl.navigateForward('/tabs/create/generatedImage', {
            queryParams: { url: data.data.imageUrl, gallery: false },
          });
          // this.showSpinner = false;
          this.toastService.toggleSpinner(false);
        },
        error: (error) => {
          this.resetPrompts();
          // this.showSpinner = false;
          this.toastService.toggleSpinner(false);
        },
      });
  }

  checkForm() {
    if (!this.positivePrompt) {
      return;
    }
  }

  checkOptionsFilled() {
    const [format, ...otherOptions] = [...this.displayOptions];
    console.log('adsd..', otherOptions);
    const options = otherOptions.reduce((result: any, currentObject: any) => {
      result[`id_${currentObject.value}`] = currentObject.id;
      return result;
    }, {});
    console.log('aa..', options);
    const optionsSelected = Object.keys(options).every((el) => {
      console.log('sd..', options[el]);
      return options[el];
    });
    return optionsSelected;
  }

  resetPrompts() {
    this.positivePrompt = '';
    this.negativePrompt = '';
    // this.getDisplayOptions();
  }

  ngOnDestroy(): void {
    if (this.userUUIDSub) {
      this.userUUIDSub.unsubscribe();
    }
  }
}
