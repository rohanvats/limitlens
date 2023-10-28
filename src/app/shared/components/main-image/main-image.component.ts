import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-image',
  templateUrl: './main-image.component.html',
  styleUrls: ['./main-image.component.scss'],
})
export class MainImageComponent  implements OnInit {

  @Input() image: string = '';

  constructor() { }

  ngOnInit() {}

}
