import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { FaceswapCategory } from 'src/app/interfaces/faceswapCategory.interface';

import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-faceswap-category',
  templateUrl: './faceswap-category.component.html',
  styleUrls: ['./faceswap-category.component.scss'],
})
export class FaceswapCategoryComponent implements OnInit {
  category$!: Observable<any>;
  categoryId!: number;

  constructor(
    private navCtrl: NavController,
    public route: ActivatedRoute,
    private categoryService: CategoryService
  ) {
    this.route.params.subscribe((categoryId: Params): void => {
      this.categoryId = parseInt(categoryId['id']);
    });
  }

  ngOnInit() {
    if (this.categoryId) {
      this.category$ = this.fetchCategoryData(this.categoryId);

      // pending to be removed
      this.fetchCategoryData(this.categoryId).subscribe((data) =>
        console.log('data...', data)
      );
    }
  }

  selectCategory(imageUrl: string, bank_uiid: string) {
    console.log('bank uuid..', bank_uiid);

    this.navCtrl.navigateForward(['/tabs/home/faceswap'], {
      queryParams: { image: imageUrl, uiid: bank_uiid },
    });
  }

  fetchCategoryData(catgeoryId: number): Observable<FaceswapCategory> {
    return this.categoryService.getCategory(catgeoryId);
  }
}
