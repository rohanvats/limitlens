import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  Subscription,
  catchError,
  exhaustMap,
  finalize,
  map,
  of,
  tap,
} from 'rxjs';
import { MatchPassword } from 'src/app/helper/validators/match-password';
import { UniqueUsername } from 'src/app/helper/validators/unique-username';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.page.html',
  styleUrls: ['./user-account.page.scss'],
})
export class UserAccountPage implements OnInit {
  userdata: any;
  userDataSub: Subscription;

  constructor(
    private matchValidator: MatchPassword,
    private uniqueUsername: UniqueUsername,
    private authService: AuthService,
    private http: HttpClient
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    console.log('will enter');
    this.userDataSub = this.authService.getAuthData$
      .pipe(
        map((value) => value?.uuid),
        exhaustMap((uuid) =>
          this.http.get(`${environment.URL}/user/${uuid}/info`)
        ),
        catchError((err) => of({})),
        finalize(() => {
          // this.myInfoMode = false;
        })
      )
      .subscribe((data: any) => {
        console.log('asdasasdf...', data.data);
        if (data.success) {
          this.userdata = data.data;
        }
      });
  }

  ionViewDidLeave() {
    this.userDataSub.unsubscribe();
  }
}
