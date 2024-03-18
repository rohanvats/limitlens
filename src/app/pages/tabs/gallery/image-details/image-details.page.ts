import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Share } from '@capacitor/share';
@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.page.html',
  styleUrls: ['./image-details.page.scss'],
})
export class ImageDetailsPage implements OnInit {
  imageDetails: any;

  constructor(
    private route: ActivatedRoute,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((image) => {
      console.log(image);
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
          placeholder: 'Name',
        },
      ],
    });

    await alert.present();
  }
}
