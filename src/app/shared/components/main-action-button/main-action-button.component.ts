import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-action-button',
  templateUrl: './main-action-button.component.html',
  styleUrls: ['./main-action-button.component.scss'],
})
export class MainActionButtonComponent  implements OnInit {

  @Input() disableButton:any;
  @Input('type') buttonType: any;

  constructor() { }

  ngOnInit() {}

}
