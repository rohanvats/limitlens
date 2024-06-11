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
@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss'],
})
export class ImageDetailComponent implements OnInit {
  imageDetails: any = {};
  gallery: string;
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
    private toastService: ToastService
  ) {}

  ngOnInit() {
    console.log('img details on init');
    this.route.queryParams.subscribe((image: any) => {
      console.log(image);
      this.gallery = image.gallery;
      this.imageDetails = image;
    });
  }

  // ionViewWillEnter() {
  //   console.log('img details will enter');
  //   this.route.queryParams.subscribe((image: any) => {
  //     console.log(image);
  //     this.gallery = image.gallery;
  //     this.imageDetails = image;
  //   });
  // }

  // ionViewDidEnter() {
  //   console.log('img details did enter');
  //   this.route.queryParams.subscribe((image: any) => {
  //     console.log(image);
  //     this.gallery = image.gallery;
  //     this.imageDetails = image;
  //   });
  // }

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
