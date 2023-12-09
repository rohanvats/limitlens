import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
    // this.toggleDarkTheme(true);
    document.body.classList.toggle('dark', true);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('app now running');
    });
  }
}
