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

  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.checkUserUUID().subscribe((uuid) => {
      console.log('gllery service uuid...', uuid);
      this.uuid = uuid;
    });

    const a = this.authService.deviceInfo();
    console.log('aaaa...', a);
  }

  ngOnInit(): void {}

  async getDeviceInfo() {
    // await this.authService.
  }

  fetchGallerySavedImages() {
    return this.http
      .get(
        `${environment.URL}/user/gallery/new/${this.uuid}/${this.authService.deviceID}`
      )
      .pipe(map((images) => images['data']?.['new_images']))
      .subscribe(
        (images) => this.galleryImagesSubject.next(images),
        (error) => console.log('err at gallery..', error)
      );
  }

  fetchFaceSwapSavedImages() {
    return this.http
      .get(
        `${environment.URL}/user/faceswap/new/${this.uuid}/${this.authService.deviceID}`
      )
      .pipe(map((images) => images['data']?.['new_images']))
      .subscribe(
        (images) => this.faceswapImagesSubject.next(images),
        (error) => console.log('err at gallery..', error)
      );
  }

  deleteImage(imageUUID: string) {
    return this.http.post(`${environment.URL}/delete-image/${this.uuid}`, {
      imageUUId: imageUUID,
    });
  }
}
