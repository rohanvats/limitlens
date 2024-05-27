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
  async ionViewWillEnter() {
    console.log('User account page will enter...');
    let userLoggedIn = false;
    this.authService.isLoggedIn$.subscribe((loggedIn) => {
      console.log('logged in...', loggedIn);
      userLoggedIn = loggedIn;
    });
    if (userLoggedIn) {
      this.toastService.toggleSpinner(true);
      this.authService.getAuthData$
        .pipe(
          map((value) => value?.uuid),
          exhaustMap((uuid) => {
            return this.http.get(`${environment.URL}/user/${uuid}/info`);
          })
        )
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
