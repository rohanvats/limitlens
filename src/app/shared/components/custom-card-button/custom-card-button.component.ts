import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-card-button',
  templateUrl: './custom-card-button.component.html',
  styleUrls: ['./custom-card-button.component.scss'],
})
export class CustomCardButtonComponent implements OnInit {
  @Input('background-image') cardBackgroundImage: string = '';
  @Input('height') cardHeight = '';
  @Input('width') cardWidth = '';
  @Input() enableAsButton: boolean = false;
  @Input() classes = '';
  @Input() mode = '';

  constructor() {}

  ngOnInit() {}
}
