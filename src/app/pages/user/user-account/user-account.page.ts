import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription, exhaustMap, map } from 'rxjs';
import { ToastService } from 'src/app/helper/toast.service';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.page.html',
  styleUrls: ['./user-account.page.scss'],
})
export class UserAccountPage implements OnInit {
  userdata: any;

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    public toastService: ToastService
  ) {}

  ngOnInit() {}

  // On enter User Info Page
  ionViewWillEnter() {
    if (this.authService.userLoggedIn) {
      this.toastService.toggleSpinner(true);
      console.log('uuid...', this.authService.uuid);

      this.http
        .get(`${environment.URL}/user/${this.authService.uuid}/info`)
        .subscribe({
          next: (userData: any) => {
            this.toastService.toggleSpinner(false);
            console.log('asdasasdf...', userData);
            if (userData?.success) {
              this.userdata = userData;
            }
          },
          error: (err) => {
            this.toastService.toggleSpinner(false);
            console.log('No uuid found', err);
          },
        });
    }
  }
}
