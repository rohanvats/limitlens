import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userOptions(){
    return [
      {name: 'my info', url:'assets/UI_Images/Regular_Size/App_UI_Buttons_small_size-assets/User_Info.png'},
      {name: 'subscription', url:'assets/UI_Images/Regular_Size/App_UI_Buttons_small_size-assets/Subscription.png'},
      {name: 'orders', url:'assets/UI_Images/Regular_Size/App_UI_Buttons_small_size-assets/Orders.png'},
      {name: 'settings', url:'assets/UI_Images/Regular_Size/App_UI_Buttons_small_size-assets/Settings.png'},
      {name: 'help', url:'assets/UI_Images/Regular_Size/App_UI_Buttons_small_size-assets/Help.png'},
    ]
  }

}
