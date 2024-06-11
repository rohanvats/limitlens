import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { SwiperOptions, ZoomOptions } from 'swiper/types';
// import { ZoomEvents } from 'swiper/types';

@Component({
  selector: 'app-main-image',
  templateUrl: './main-image.component.html',
  styleUrls: ['./main-image.component.scss'],
})
export class MainImageComponent implements OnInit {
  @Input() image: string | undefined | null;
  @Input() imgStyle: string;
  swiperModules = [IonicSlides];
  config: SwiperOptions = {
    zoom: true,
  };

  constructor() {}

  ngOnInit() {}
}
