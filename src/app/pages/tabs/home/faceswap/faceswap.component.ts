import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, map, noop, switchMap, tap } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { CreateService } from '../../create/create.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/helper/toast.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-faceswap',
  templateUrl: './faceswap.component.html',
  styleUrls: ['./faceswap.component.scss'],
})
export class FaceswapComponent implements OnInit, OnDestroy {
  userImage: string = '';
  faceswapImage$?: Observable<string>;
  uploadedImageUUID: string;
  uuidSub: Subscription;

  bank_uiid: string = '';
  image: string =
    'https://unsplash.com/photos/white-usb-flash-drive-on-brown-wooden-table-OKeu92CvolE';

  constructor(
    private route: ActivatedRoute,
    public categoryService: CategoryService,
    private authService: AuthService,
    private createService: CreateService,
    public toastService: ToastService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((image) => {
      if (image) {
        this.image = image?.['image'];
        this.bank_uiid = image?.['uiid'];
      }
    });
  }

  getSelectedImage(event: any) {
    this.userImage = event;
  }

  generateFaceswap() {
    const payload = {
      type: 2,
      uuid_bank_image: this.bank_uiid,
      uuid_uploaded_image: this.uploadedImageUUID,
      user_uuid: '',
    };
    // this.uuidSub = this.authService.checkUserUUID().subscribe((uuid) => {
    //   payload.user_uuid = uuid;
    // });
    payload.user_uuid = this.authService.uuid;
    console.log('asdasd...', payload.user_uuid);

    if (!payload.uuid_uploaded_image) {
      this.toastService.PresentToast('Please upload selfie');
      return;
    }
    this.toastService.toggleSpinner(true);
    this.createService
      .generateFaceSwappedImage(payload, payload.user_uuid)
      .subscribe(
        (image) => {
          console.log('face swap image : ..', image);
          if (image.success) {
            console.log('IMAGE RECIEVED...', image?.data?.imageUrl);
            this.toastService.toggleSpinner(false);
            this.navCtrl.navigateForward('/tabs/home/faceswappedImage', {
              queryParams: { imageUrl: image?.data?.imageUrl },
              fragment: 'faceswapImage',
            });
          }
        },
        (err) => {
          this.toastService.toggleSpinner(false);
          return this.toastService.PresentToast('Unable to upload');
        }
      );
  }

  ngOnDestroy(): void {
    if (this.uuidSub) {
      this.uuidSub.unsubscribe();
    }
  }
}
