import { Component, ViewEncapsulation } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CategoryService } from 'src/app/services/category.service';
import { FaceswapCategory } from 'src/app/interfaces/faceswapCategory.interface';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  faceswapCategories$: Observable<FaceswapCategory[]>;
  skeletonSlides$: Observable<any>;

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    public categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.fetchFaceswapCategories();
  }

  fetchFaceswapCategories() {
    this.faceswapCategories$ = this.categoryService.faceswapCategories();

    this.categoryService
      .faceswapCategories()
      .subscribe((data) => console.log('data...', data));
  }

  toFaceswapCategory(id: number) {
    this.navCtrl.navigateForward([`/tabs/home/faceswapCategory/${id}`]);
  }
}
