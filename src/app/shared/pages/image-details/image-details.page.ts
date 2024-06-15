import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ActionSheetController,
  AlertController,
  NavController,
} from '@ionic/angular';
import { Share } from '@capacitor/share';
import { GalleryService } from 'src/app/services/gallery.service';
import { ToastService } from 'src/app/helper/toast.service';
import { Observable } from 'rxjs';
import { CreateService } from 'src/app/pages/tabs/create/create.service';
import { AuthService } from 'src/app/services/auth.service';
import { DisplayOptionsService } from 'src/app/services/displayOptions.service';
@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.page.html',
  styleUrls: ['./image-details.page.scss'],
})
export class ImageDetailsPage implements OnInit {
  imageDetails: any = {};
  gallery: string;
  generateAnotherPayload: any;
  fragment$: Observable<any>;

  public deleteButtons = [
    {
      text: 'No',
      cssClass: 'custom-alert',
      role: 'cancel',
    },
    {
      text: 'Yes',
      cssClass: 'custom-alert',
      role: 'confirm',
      handler: () => {
        console.log('data');

        this.galleryService
          .deleteImage(this.imageDetails['uuid'])
          .subscribe((data: any) => {
            if (data.success) {
              this.toastService.PresentToast(data.message);
              this.galleryService.fetchGallerySavedImages();
              this.galleryService.fetchFaceSwapSavedImages();
              this.navCtrl.navigateBack('/tabs/gallery');
            }
            console.log('deleted...', data);
          });
      },
    },
  ];
  public editInputs = [
    {
      placeholder: 'Name',
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private actionSheetCtrl: ActionSheetController,
    private alertController: AlertController,
    private navCtrl: NavController,
    private galleryService: GalleryService,
    public toastService: ToastService,
    private createService: CreateService,
    private authService: AuthService,
    private displayOptionsService: DisplayOptionsService
  ) {}

  ngOnInit() {
    this.fragment$ = this.route.fragment;

    this.route.queryParams.subscribe((image: any) => {
      console.log('image...', image, image.generatePayload);
      this.gallery = image.gallery;
      this.imageDetails = image;
      if (image.generatePayload) {
        console.log('pay...', image.generatePayload);
        this.generateAnotherPayload = JSON.parse(image.generatePayload);
      }
    });
  }

  removeWaterMark() {
    console.log(
      'uuid..',
      this.generateAnotherPayload,
      this.imageDetails.imageUUID
    );
    this.toastService.toggleSpinner(true);
    this.createService
      .removeWaterMark(
        // this.generateAnotherPayload.user_uuid,
        this.authService.uuid,
        this.imageDetails.imageUUID
      )
      .subscribe({
        next: (data: any) => {
          console.log('generated image...', data);
          this.navCtrl.navigateForward('/tabs/create/generatedImage', {
            queryParams: {
              imageUrl: data.data.imageUrl,
              imageUUID: data.data.uuid,
              generatePayload: JSON.stringify({
                ...this.generateAnotherPayload,
              }),
            },
            fragment: 'generatedImage',
          });
          this.displayOptionsService.fetchDisplayOptions();
          this.toastService.toggleSpinner(false);
        },
        error: (error) => {
          this.displayOptionsService.fetchDisplayOptions();
          this.toastService.toggleSpinner(false);
        },
        complete: () => {
          this.displayOptionsService.fetchDisplayOptions();
          this.toastService.toggleSpinner(false);
        },
      });
  }

  generateAnother() {
    this.toastService.toggleSpinner(true);
    this.createService
      .generateImage(
        this.generateAnotherPayload,
        this.generateAnotherPayload.user_uuid
      )
      .subscribe({
        next: (data) => {
          console.log('generated image...', data);
          // this.resetPrompts();
          this.navCtrl.navigateForward('/tabs/create/generatedImage', {
            queryParams: {
              imageUrl: data.data.imageUrl,
              imageUUID: data.data.uuid,
              generatePayload: JSON.stringify({
                ...this.generateAnotherPayload,
              }),
            },
            fragment: 'generatedImage',
          });
          this.displayOptionsService.fetchDisplayOptions();
          this.toastService.toggleSpinner(false);
        },
        error: (error) => {
          this.displayOptionsService.fetchDisplayOptions();
          this.toastService.toggleSpinner(false);
        },
        complete: () => {
          this.displayOptionsService.fetchDisplayOptions();
          this.toastService.toggleSpinner(false);
        },
      });
  }

  deleteImage(imgUUID: string) {
    this.galleryService
      .deleteImage(imgUUID)
      .subscribe((data) => console.log('deleted?..', data));
  }

  async shareImage() {
    await Share.share({
      url: this.imageDetails?.imageUrl,
    });
  }

  onClick() {
    console.log('On print');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Rename the picture',
      mode: 'ios',
      buttons: [
        {
          text: 'OK',
          cssClass: 'custom-alert',
          handler: (data) => {
            console.log('Renamed image', data);
          },
        },
        {
          text: 'CANCEL',
          handler: () => {
            this.alertController.dismiss();
          },
        },
      ],
      inputs: [
        {
          name: 'imageName',
          type: 'text',
          // placeholder: 'Name',
        },
      ],
    });

    await alert.present();
  }
}
