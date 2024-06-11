import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Preferences } from '@capacitor/preferences';
import { Device } from '@capacitor/device';
import { AdvertisingId } from '@capacitor-community/advertising-id';
import { Browser } from '@capacitor/browser';
import {
  BehaviorSubject,
  catchError,
  map,
  mergeMap,
  tap,
  throwError,
} from 'rxjs';
import { ModalController, NavController, Platform } from '@ionic/angular';
import { ToastService } from '../helper/toast.service';
import { SignInPage } from '../auth/sign-in/sign-in.page';
// import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

export interface User {
  username: string;
  email: string;
  password: string;
  // passwordConfirmation: string;
}

export interface loginUser {
  email: string;
  password: string;
  user_name: string;
  first_name: string;
  last_name: string;
  phone_number: number;
  avatar: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  private nonAuthUUID: string;
  userLoggedIn: boolean = false;
  uuid: string;
  deviceID: any;
  user = null;

  constructor(
    private http: HttpClient,
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private toastService: ToastService,
    private platform: Platform
  ) {}

  ngOnInit(): void {}

  // To collect auth data
  private authDataSubject = new BehaviorSubject<any>(null);
  public getAuthData$ = this.authDataSubject.asObservable();

  updateAuthData(value) {
    this.authDataSubject.next(value);
  }

  openSignInModal() {
    this.modalCtrl
      .create({
        breakpoints: [0, 1],
        initialBreakpoint: 1,
        component: SignInPage,
      })
      .then((modalEl) => {
        modalEl.present();
        return modalEl.onDidDismiss();
      });
  }

  getAdvertisingId = async () => {
    const advertisingId = await AdvertisingId.getAdvertisingId();
    return advertisingId;
  };

  checkAuth = async () => {
    let { value } = await Preferences.get({ key: 'auth-data' });
    const newvalue = JSON.parse(value);
    if (newvalue?.uuid && newvalue?.jwt) {
      this.uuid = newvalue?.uuid;
      console.log('auth service check auth uuid...', this.uuid);
      this.userLoggedIn = true;
      this.updateAuthData(newvalue);
    } else {
      this.uuid = this.nonAuthUUID;
      console.log('auth service check auth uuid...', this.uuid);
      this.userLoggedIn = false;
      this.updateAuthData(null);
    }
  };

  // User signup
  signup(user: any) {
    return this.http.post(
      `${environment.URL}/users/${this.uuid}/register-email`,
      user
    );
  }

  updateUser(user: any) {
    return this.http.post(`${environment.URL}/user/update/${this.uuid}`, user);
  }

  login(user: any) {
    return this.http
      .post(`${environment.URL}/user/authenticate`, {
        ...user,
        device_id: this.deviceID.identifier,
      })
      .pipe(
        catchError((err) => {
          this.toastService.toggleSpinner(false);
          this.toastService.PresentToast(
            err.error.error,
            '',
            'alert-circle-outline'
          );
          return throwError('LOGIN ERROR...', err);
        }),
        tap(async (data: any) => {
          this.toastService.toggleSpinner(false);
          this.toastService.PresentToast(
            'Login successful!',
            '',
            'finger-print-outline'
          );
          // await this.saveAuthData(data);
          const authData = { uuid: data.uuid, jwt: data.token };
          this.updateAuthData(authData);
          this.uuid = data.uuid;
          console.log('uuid after login...', this.uuid);
          this.userLoggedIn = true;
          await Preferences.set({
            key: 'auth-data',
            value: JSON.stringify(authData),
          });
          this.navCtrl.navigateForward('/');
        })
      );
  }

  // google signin
  // async googleSignIn() {
  //   // try {
  //   const user = await GoogleAuth.signIn();
  //   console.log('user...', user, environment.URL);
  //   if (user) {
  //     this.http
  //       .post(`${environment.URL}/auth/google/callback`, {
  //         device_id: this.deviceID.identifier,
  //         uuid: this.uuid,
  //         code: user.serverAuthCode,
  //       })
  //       .pipe(
  //         catchError((err) => {
  //           this.toastService.toggleSpinner(false);
  //           this.toastService.PresentToast(
  //             err.error.error,
  //             '',
  //             'alert-circle-outline'
  //           );
  //           return throwError('LOGIN ERROR...', err);
  //         }),
  //         tap(async (data: any) => {
  //           this.toastService.toggleSpinner(false);
  //           this.toastService.PresentToast(
  //             'Login successful!',
  //             '',
  //             'finger-print-outline'
  //           );
  //           // await this.saveAuthData(data);
  //           const authData = { uuid: data.uuid, jwt: data.token };
  //           this.updateAuthData(authData);
  //           this.uuid = data.uuid;
  //           console.log('uuid after login...', this.uuid);
  //           this.userLoggedIn = true;
  //           await Preferences.set({
  //             key: 'auth-data',
  //             value: JSON.stringify(authData),
  //           });
  //           // this.navCtrl.navigateForward('/');
  //         })
  //       )
  //       .subscribe((data) => {
  //         console.log('google auth data...', data);
  //       });
  //   }
  // }

  googleSignIn() {
    this.http
      .get('https://dev-front-api.limitlens.ai/api/auth/google/redirect')
      .subscribe(async (data) => {
        console.log('data..', data);
        window.location.href = data['url'];
      });
  }

  openCapacitorSite = async (url) => {
    await Browser.open({ url });
  };

  // google signout
  async googleSignout() {
    // await GoogleAuth.signOut();
    // console.log('user...', user);
  }

  // User Logout
  logout() {
    console.log('DEVICE ID..', this.deviceID.identifier);
    return this.http
      .post(`${environment.URL}/logout`, {
        device_id: this.deviceID.identifier,
      })
      .pipe(
        tap(async () => {
          console.log('uuid before..', this.uuid);
          await Preferences.remove({ key: 'auth-data' });
          this.updateAuthData(null);
          this.uuid = this.nonAuthUUID;
          console.log('uuid after..', this.uuid);
          this.userLoggedIn = false;
        })
      );
  }

  // Obtain Non Authenticated UUID
  async getNonAuthUUID() {
    return Preferences.get({ key: 'nonAuthUserUUID' });
  }

  // Registeration for Non Authenticated User
  registerForNonUser(appVersionCreds: unknown) {
    return this.http.post(`${environment.URL}/register`, appVersionCreds).pipe(
      map((nonAuthUUID: any) => nonAuthUUID?.uuid),
      tap((nonAuthUUID) => console.log('NO AUTHENTICATED UUID...', nonAuthUUID))
    );
  }

  // Device Info
  deviceInfo = async () => {
    const DeviceInfo = await Device.getInfo();
    const deviceID = await Device.getId();
    if (deviceID) {
      this.deviceID = deviceID;
    }
    return { mobileInfo: DeviceInfo, deviceId: deviceID };
  };

  initializeApp = async () => {
    //Device Information
    const deviceInfo = await this.deviceInfo();

    // GoogleAuth.initialize({
    //   clientId:
    //     '891600124643-milg6gi5i82o8v2747rmj9r4mbnh6d61.apps.googleusercontent.com',
    //   scopes: ['profile', 'email'],
    //   grantOfflineAccess: true,
    // });

    // App version credentials
    const versionCreds = {
      app_name: 'coconuts',
      app_number: 'v1.0.0',
      device_id: deviceInfo.deviceId.identifier,
      device_model: deviceInfo.mobileInfo.model,
      device_manufacturer: deviceInfo.mobileInfo.manufacturer,
      os_version: `${deviceInfo.mobileInfo.operatingSystem} ${deviceInfo.mobileInfo.osVersion}`,
    };

    //Registering Non authenticated User for UUID
    this.registerForNonUser(versionCreds).subscribe(async (nonAuthUUID) => {
      await Preferences.set({
        key: 'nonAuthUserUUID',
        value: JSON.stringify({ nonAuthUUID }),
      });

      let nonAuthUserUUID = await this.getNonAuthUUID();
      nonAuthUserUUID = JSON.parse(nonAuthUserUUID.value);
      if (nonAuthUserUUID) {
        console.log('non auth uuid...', nonAuthUserUUID['nonAuthUUID']);
        this.nonAuthUUID = nonAuthUserUUID['nonAuthUUID'];
        this.uuid = nonAuthUserUUID['nonAuthUUID'];
      }

      await this.checkAuth();
    });
  };
}
