import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Device } from '@capacitor/device';
import { Preferences } from '@capacitor/preferences';
import { ModalController, NavController } from '@ionic/angular';
import { ToastService } from 'src/app/helper/toast.service';
import { UserSignupComponent } from 'src/app/pages/user/user-account/user-signup/user-signup.component';
import { noop } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  component = UserSignupComponent;
  constructor(
    private authService: AuthService,
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private toastService: ToastService
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

  onSubmit() {
    this.toastService.toggleSpinner(true);
    this.authService.login(this.userLoginForm.value).subscribe({
      next: () => {
        noop;
        this.modalCtrl.dismiss();
      },
      error: (err) => {
        return console.log('error..', err);
      },
    });
  }
}
