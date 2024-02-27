import { Component, Input, OnInit } from '@angular/core';
import { IonicSlides, NavController } from '@ionic/angular';

import { FaceswapCategory } from 'src/app/interfaces/faceswapCategory.interface';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input() slides: FaceswapCategory;
  swiperModules = [IonicSlides];

  constructor(
    private navCtrl: NavController,
    public categoryService: CategoryService
  ) {}

  ngOnInit() {}

  selectCategory(imageUrl: string) {
    this.navCtrl.navigateForward(['/tabs/home/faceswap'], {
      queryParams: { image: imageUrl },
    });
  }
}
