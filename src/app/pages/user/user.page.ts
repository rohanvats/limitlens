import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ToastService } from 'src/app/helper/toast.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  userOptions$: Observable<{ name: string; url: string }[]>;

  constructor(
    public userService: UserService,
    public authService: AuthService,
    private toastServie: ToastService,
    private navCtrl: NavController
  ) {}

  ionViewWillLeave() {
    console.log('will leave');
  }

  ionViewDidLeave() {
    console.log('did leave');
  }

  ionViewDidEnter() {
    console.log('did enter');
  }

  ionViewWillEnter() {
    console.log('will enter');
  }

  ngOnInit() {
    this.userOptions$ = this.userService.userOptions();
    // this.authService.isLoggedIn$.subscribe((data) => {
    //   console.log('daatattata...', data);
    // });
  }

  logout() {
    this.authService.logout().subscribe(
      (data) => {
        this.toastServie.PresentToast('Logged out successfully');
        this.navCtrl.navigateBack('/');
        console.log('logout...', data);
      },
      (err) => {
        this.toastServie.PresentToast('Couldnt log out');
      }
    );
  }

  // userOptions() {
  //   return [
  //     {
  //       name: 'my info',
  //       url: 'assets/UI_Images/WebP_Regular_Size/App_UI_Buttons_small_size-assets/User_Info.webp',
  //     },
  //     {
  //       name: 'subscription',
  //       url: 'assets/UI_Images/WebP_Regular_Size/App_UI_Buttons_small_size-assets/Subscription.webp',
  //     },
  //     {
  //       name: 'orders',
  //       url: 'assets/UI_Images/WebP_Regular_Size/App_UI_Buttons_small_size-assets/Orders.webp',
  //     },
  //     {
  //       name: 'settings',
  //       url: 'assets/UI_Images/WebP_Regular_Size/App_UI_Buttons_small_size-assets/Settings.webp',
  //     },
  //     {
  //       name: 'help',
  //       url: 'assets/UI_Images/WebP_Regular_Size/App_UI_Buttons_small_size-assets/Help.webp',
  //     },
  //   ];
  // }
}
