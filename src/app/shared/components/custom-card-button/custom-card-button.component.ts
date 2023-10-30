import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-custom-card-button',
  templateUrl: './custom-card-button.component.html',
  styleUrls: ['./custom-card-button.component.scss'],
})
export class CustomCardButtonComponent  implements OnInit {


  @Input() stylingImage:string = '';

  onChanges(changes: SimpleChanges){
    if(changes['stylingImage']){
      console.log('styling image: ', this.stylingImage);
    }
  }

  constructor() { }

  ngOnInit() {
  }

  backgroundImageStyle: object = {
    'background-image': 'url("your-image-url.jpg")'
  };

}
