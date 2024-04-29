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
  map,
  of,
  take,
  tap,
} from 'rxjs';
import { ModalController } from '@ionic/angular';
import { UserSigninComponent } from '../pages/user/user-account/user-signin/user-signin.component';

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
  devId: any;

  constructor(private http: HttpClient, private modalCtrl: ModalController) {}

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
        component: UserSigninComponent,
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
    return this.http.post(`${environment.URL}/user/authenticate`, {
      ...user,
      device_id: this.devId.identifier,
    });
  }

  async getNonAuthUUID() {
    return await Preferences.get({ key: 'nonAuthUserUUID' });
  }

  checkUserUUID() {
    return this.isLoggedIn$.pipe(
      catchError(() => of('')),
      exhaustMap((loggedIn) => {
        if (loggedIn) {
          return this.getAuthData$.pipe(
            map((data) => data.uuid),
            take(1)
          );
        }
        return this.getNonAuthUUID$.pipe(take(1));
      })
    );
  }

  deviceInfo = async () => {
    const info = await Device.getInfo();
    const info2 = await Device.getId();
    if (info2) {
      this.devId = info2;
    }
    return { mobileInfo: info, deviceId: info2 };
  };

  registerForNonUser(body) {
    return this.http.post(`${environment.URL}/register`, body).pipe(
      map((uuid: any) => uuid.uuid),
      tap((data) => console.log(data))
    );
  }

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

      let notUserUUID = await this.getNonAuthUUID();
      notUserUUID = JSON.parse(notUserUUID.value);
      if (notUserUUID) {
        this.updateNonAuthUUID(notUserUUID['nonAuthUUID']);
      }
    });
  };
}
