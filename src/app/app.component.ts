import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Platform, isPlatform } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { ToastService } from './helper/toast.service';
import { AuthService } from './services/auth.service';
import { GalleryService } from './services/gallery.service';
import { Preferences } from '@capacitor/preferences';

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showSpinner = false;
  constructor(
    private platform: Platform,
    public toastService: ToastService,
    private authService: AuthService,
    private galleryService: GalleryService
  ) {
    if (isPlatform('capacitor')) {
      // GoogleAuth.init()
    }
    this.initializeApp();
    document.body.classList.toggle('dark', true);
  }

  async ngOnInit() {
    await this.authService.checkAuth();
    this.galleryService.fetchFaceSwapSavedImages();
    this.galleryService.fetchGallerySavedImages();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Limitlens is now running...');
    });
  }
}
