import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { ToastService } from './helper/toast.service';
import { AuthService } from './services/auth.service';

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
    private authService: AuthService
  ) {
    this.initializeApp();
    document.body.classList.toggle('dark', true);
  }

  ngOnInit() {
    this.authService.checkAuth();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('app now running');
    });
  }
}
