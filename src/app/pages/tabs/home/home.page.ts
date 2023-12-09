import { Component } from '@angular/core';
import { IonicSlides, NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  globalData: any = [];
  swiperModules = [IonicSlides];

  opts = {
    freeMode: true,
    slidesPerView: 2.8,
    slidesOffsetBefore: 30,
    slidesOffsetAfter: 100,
  };

  // register();

  catgeories = [
    { name: 'abc' },
    { name: 'qwe' },
    { name: 'qwdd' },
    { name: 'ads' },
  ];

  constructor(
    private dataService: DataService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.getGlobalFeedData();
  }

  getGlobalFeedData() {
    this.dataService.getGlobalFeedData().subscribe((data) => {
      this.globalData = data;
    });
  }

  toImageDetails(image: any) {
    this.navCtrl.navigateForward(['/tabs/home/global-feed-details'], {
      queryParams: image,
    });
    console.log('From home: ', image);
  }
}
