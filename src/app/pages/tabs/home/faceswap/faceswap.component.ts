import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-faceswap',
  templateUrl: './faceswap.component.html',
  styleUrls: ['./faceswap.component.scss'],
})
export class FaceswapComponent implements OnInit {
  userImage: string = '';
  faceswapImage$?: Observable<string>;

  image: string =
    'https://unsplash.com/photos/white-usb-flash-drive-on-brown-wooden-table-OKeu92CvolE';

  constructor(
    private route: ActivatedRoute,
    public categoryService: CategoryService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((image) => {
      if (image) {
        this.image = image['image'];
      }
    });
  }

  getSelectedImage(event: any) {
    console.log('image: ', event);
    this.userImage = event;
  }

  generateFaceswap() {
    if (this.userImage && this.faceswapImage$) {
      console.log('userImage: ', this.userImage, 'image:..', this.image);
    }
  }
}
