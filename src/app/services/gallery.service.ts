import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { BehaviorSubject, Observable, map, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GalleryService implements OnInit {
  uuid: string = '';

  private galleryImagesSubject = new BehaviorSubject<any>([]);
  private faceswapImagesSubject = new BehaviorSubject<any>([]);

  public galleryImages$: Observable<any> =
    this.galleryImagesSubject.asObservable();
  public faceswapImages$: Observable<any> =
    this.faceswapImagesSubject.asObservable();

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {}

  fetchGallerySavedImages() {
    // if (this.authService.userLoggedIn) {
    return this.http
      .get(
        `${environment.URL}/user/gallery/new/${this.authService.uuid}/${this.authService.deviceID.identifier}`
      )
      .pipe(map((images) => images['data']?.['new_images']))
      .subscribe(
        (images: any) => {
          if (images.length > 0) {
            console.log('gallery images..', images);
            this.galleryImagesSubject.next(images);
          } else {
            this.galleryImagesSubject.next([]);
          }
        },
        (error) => console.log('err at gallery..', error)
      );
  }

  fetchFaceSwapSavedImages() {
    return this.http
      .get(
        `${environment.URL}/user/faceswap/new/${this.authService.uuid}/${this.authService.deviceID.identifier}`
      )
      .pipe(map((images) => images['data']?.['new_images']))
      .subscribe(
        (images: any) => {
          if (images.length > 0) {
            console.log('gallery images..', images);
            this.faceswapImagesSubject.next(images);
          } else {
            this.faceswapImagesSubject.next([]);
          }
        },
        (error) => console.log('err at faceswap..', error)
      );
  }

  deleteImage(imageUUID: string) {
    return this.http.post(`${environment.URL}/delete-image/${this.uuid}`, {
      imageUUId: imageUUID,
    });
  }
}
