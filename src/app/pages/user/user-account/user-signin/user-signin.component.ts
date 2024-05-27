import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Device } from '@capacitor/device';
import { Preferences } from '@capacitor/preferences';
import { ModalController, NavController } from '@ionic/angular';
import { ToastService } from 'src/app/helper/toast.service';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.scss'],
})
export class UserSigninComponent implements OnInit {
  showModal: any;
  constructor(
    private authService: AuthService,
    private navCtrl: NavController,
    public toastService: ToastService,
    private modalCtrl: ModalController
  ) {}

  get controls() {
    return this.userLoginForm.controls;
  }

  ngOnInit() {
    this.logDeviceInfo();
  }

  logDeviceInfo = async () => {
    const info = await Device.getLanguageTag();

    console.log('info...', info);
  };

  userLoginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  toSignUp() {
    this.navCtrl.navigateForward('/user/user-info');
  }

  // onSubmit() {
  //   console.log('value...', this.userLoginForm.value);
  //   this.toastService.updateSpinner(true);
  //   this.authService.login(this.userLoginForm.value).subscribe(
  //     async (data: any) => {
  //       console.log('user data...', data);
  //       if (data && data.success) {
  //         this.toastService.updateSpinner(false);
  //         this.toastService.PresentToast(
  //           'Login successful!',
  //           '',
  //           'finger-print-outline'
  //         );
  //         const authData = { uuid: data.uuid, jwt: data.token };
  //         this.authService.updateAuthData(authData);
  //         this.authService.updateloggedIn(true);
  //         await Preferences.set({
  //           key: 'auth-data',
  //           value: JSON.stringify(authData),
  //         });
  //         this.modalCtrl.dismiss();
  //         // this.navCtrl.navigateForward('/');
  //       }
  //     },
  //     (error) => {
  //       this.toastService.updateSpinner(false);
  //       this.toastService.PresentToast(
  //         error.error.error,
  //         '',
  //         'alert-circle-outline'
  //       );
  //     }
  //   );
  // }
}
