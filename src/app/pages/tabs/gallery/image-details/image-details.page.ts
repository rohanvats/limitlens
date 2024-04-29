import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ActionSheetController,
  AlertController,
  NavController,
} from '@ionic/angular';
import { Share } from '@capacitor/share';
@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.page.html',
  styleUrls: ['./image-details.page.scss'],
})
export class ImageDetailsPage implements OnInit {
  imageDetails: any;
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
        console.log('Alert canceled');
        this.navCtrl.navigateBack('/tabs/gallery');
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
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((image: any) => {
      console.log(image);
      this.gallery = image.gallery;
      this.imageDetails = image;
    });
  }

  async shareImage() {
    await Share.share({
      url: this.imageDetails?.url,
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
