import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  userOptions$: Observable<{ name: string; url: string }[]>;

  constructor(public userService: UserService) {}

  ngOnInit() {
    this.userOptions$ = this.userService.userOptions();
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
