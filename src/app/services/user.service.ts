import { Injectable } from '@angular/core';
import { Observable, delay, of, startWith } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userOptions(): Observable<{ name: string; url: string }[]> {
    return of(this.userOptionsList);

    // .pipe(
    //   delay(3000),
    //   startWith([
    //     { ...this.userOptionsList[0], name: 'skeleton' },
    //     ...this.userOptionsList.slice(1),
    //   ])
    // );
  }

  private userOptionsList: { name: string; url: string }[] = [
    {
      name: 'my info',
      url: 'assets/UI_Images/WebP_Regular_Size/App_UI_Buttons_small_size-assets/User_Info.webp',
    },
    {
      name: 'subscription',
      url: 'assets/UI_Images/WebP_Regular_Size/App_UI_Buttons_small_size-assets/Subscription.webp',
    },
    // {
    //   name: 'orders',
    //   url: 'assets/UI_Images/WebP_Regular_Size/App_UI_Buttons_small_size-assets/Orders.webp',
    // },
    {
      name: 'settings',
      url: 'assets/UI_Images/WebP_Regular_Size/App_UI_Buttons_small_size-assets/Settings.webp',
    },
    {
      name: 'help',
      url: 'assets/UI_Images/WebP_Regular_Size/App_UI_Buttons_small_size-assets/Help.webp',
    },
  ];
}
