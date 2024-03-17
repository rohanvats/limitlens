import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-image',
  templateUrl: './main-image.component.html',
  styleUrls: ['./main-image.component.scss'],
})
export class MainImageComponent implements OnInit {
  @Input() image: string | undefined | null;
  @Input() imgStyle: string;

  constructor() {}

  ngOnInit() {}
}
