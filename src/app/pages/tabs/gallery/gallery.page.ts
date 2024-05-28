import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  liked = false;
  galleryImages$: Observable<any>;
  galleryData: any = [];

  constructor(
    private navCtrl: NavController,
    private dataService: DataService,
    public galleryService: GalleryService
  ) {}

  ngOnInit() {
    this.galleryService.fetchGallerySavedImages();
    this.galleryService.fetchFaceSwapSavedImages();
  }

  checkValue(event: any) {
    console.log('event value...', event.detail.value);
  }

  getGallerySavedImages() {
    // this.galleryImages$ = this.galleryService.fetchGallerySavedImages();
  }

  go(item: any) {
    console.log('go..', item);
    this.navCtrl.navigateForward(['/tabs/gallery/image-details'], {
      queryParams: { ...item, gallery: true },
    });
  }

  toggleLike() {
    console.log(this.liked);
    this.liked = !this.liked;
  }

  toImageDetails(event: any) {
    console.log('item: ', event, typeof event);
    this.navCtrl.navigateForward(['/tabs/gallery/image-details'], {
      queryParams: event,
    });
  }
}
