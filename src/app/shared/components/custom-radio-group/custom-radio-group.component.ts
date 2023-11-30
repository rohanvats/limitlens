import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-radio-group',
  templateUrl: './custom-radio-group.component.html',
  styleUrls: ['./custom-radio-group.component.scss'],
})
export class CustomRadioGroupComponent  implements OnInit {

  @Input() filter: any = []
  @Input() controlName: any;
  @Output() isSelected = new EventEmitter<any>;

  constructor() { }

  ngOnInit() {
    console.log('name: ', this.controlName)
  }

}
