import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Preferences } from '@capacitor/preferences';
import { Device } from '@capacitor/device';
import { AdvertisingId } from '@capacitor-community/advertising-id';
import {
  BehaviorSubject,
  catchError,
  exhaustMap,
  finalize,
  map,
  take,
  tap,
  throwError,
} from 'rxjs';
import { ModalController, NavController } from '@ionic/angular';
import { ToastService } from '../helper/toast.service';
import { SignInPage } from '../auth/sign-in/sign-in.page';

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
export class AuthService {
  uuid: any;
  deviceID: any;

  constructor(
    private http: HttpClient,
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private toastService: ToastService
  ) {}

  // If user is logged In
  private loggedInSubject = new BehaviorSubject(null);
  public isLoggedIn$ = this.loggedInSubject.asObservable();

  // To collect auth data
  private authDataSubject = new BehaviorSubject<any>(null);
  public getAuthData$ = this.authDataSubject.asObservable();

  // To collect uuid for non-authenticated users
  private nonAuthUUIDSubject = new BehaviorSubject(null);
  public getNonAuthUUID$ = this.nonAuthUUIDSubject.asObservable();

  updateNonAuthUUID(value) {
    this.nonAuthUUIDSubject.next(value);
  }

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

  updateloggedIn(value) {
    this.loggedInSubject.next(value);
  }

  getAdvertisingId = async () => {
    const advertisingId = await AdvertisingId.getAdvertisingId();
    return advertisingId;
  };

  checkAuth = async () => {
    let { value } = await Preferences.get({ key: 'auth-data' });
    const newvalue = JSON.parse(value);
    if (newvalue?.uuid && newvalue?.jwt) {
      this.updateloggedIn(true);
      this.updateAuthData(newvalue);
    } else {
      this.updateloggedIn(false);
      this.updateAuthData(null);
    }
  };

  signup(user: any) {
    return this.http.post(
      `${environment.URL}/users/${this.uuid.uuid.uuid}/register-email`,
      user
    );
  }

  updateUser(user: any) {
    const uuid = this.authDataSubject.getValue();
    return this.http.post(`${environment.URL}/user/update/${uuid}`, user);
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
          return throwError('error: ', err);
        }),
        finalize(() => console.log('An error occured')),
        tap(async (data: any) => {
          this.toastService.toggleSpinner(false);
          this.toastService.PresentToast(
            'Login successful!',
            '',
            'finger-print-outline'
          );
          const authData = { uuid: data.uuid, jwt: data.token };
          this.updateAuthData(authData);
          this.updateloggedIn(true);
          await Preferences.set({
            key: 'auth-data',
            value: JSON.stringify(authData),
          });
          this.navCtrl.navigateForward('/');
        })
      );
  }

  async getNonAuthUUID() {
    return Preferences.get({ key: 'nonAuthUserUUID' });
  }

  checkUserUUID() {
    return this.isLoggedIn$.pipe(
      tap((loggedIn) => console.log('Is user logged in...', loggedIn)),
      exhaustMap((loggedIn) => {
        if (loggedIn) {
          return this.getAuthData$.pipe(
            map((data) => data.uuid),
            take(1)
          );
        }
        return this.getNonAuthUUID$.pipe(
          tap((nuuid) => {
            if (nuuid) {
              console.log('nuuuid....', nuuid);
              take(1);
            }
          })
        );
      })
    );
  }

  registerForNonUser(body) {
    return this.http.post(`${environment.URL}/register`, body).pipe(
      map((uuid: any) => uuid.uuid),
      tap((data) => console.log(data))
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

  initialApp = async () => {
    const deviceInfo = await this.deviceInfo();
    const body = {
      app_name: 'coconuts',
      app_number: 'v1.0.0',
      device_id: deviceInfo.deviceId.identifier,
      // device_ad_id: ' 38400000-8cf0-11bd-b23e-10b96e40000d ',
      device_model: deviceInfo.mobileInfo.model,
      device_manufacturer: deviceInfo.mobileInfo.manufacturer,
      os_version: `${deviceInfo.mobileInfo.operatingSystem} ${deviceInfo.mobileInfo.osVersion}`,
    };

    this.registerForNonUser(body).subscribe(async (nonAuthUUID) => {
      await Preferences.set({
        key: 'nonAuthUserUUID',
        value: JSON.stringify({ nonAuthUUID }),
      });

      let nonUserUUID = await this.getNonAuthUUID();
      nonUserUUID = JSON.parse(nonUserUUID.value);
      if (nonUserUUID) {
        console.log('non uuid...', nonUserUUID['nonAuthUUID']);
        this.updateNonAuthUUID(nonUserUUID['nonAuthUUID']);
      }
    });
  };
}
