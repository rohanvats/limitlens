import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  helpOptions(){
    return [
      {name: 'upscaling guide', url:'assets/UI_Images/Regular_Size/App_UI_Buttons_small_size-assets/User_Info.png'},
      {name: 'faq', url:'assets/UI_Images/Regular_Size/App_UI_Buttons_small_size-assets/User_Info.png'}
    ]
  }

  constructor() { }

  ngOnInit() {
  }

}
