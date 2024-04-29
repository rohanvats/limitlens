import { HttpClient, HttpInterceptor } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  Subscription,
  catchError,
  exhaustMap,
  finalize,
  map,
  of,
  throwError,
} from 'rxjs';
import { MatchPassword } from 'src/app/helper/validators/match-password';
import { UniqueEmail } from 'src/app/helper/validators/unique-email';
import { UniqueUsername } from 'src/app/helper/validators/unique-username';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  myInfoMode: boolean = false;
  authData: Subscription;

  constructor(
    private uniqueUsername: UniqueUsername,
    private http: HttpClient,
    private uniqueEmail: UniqueEmail,
    private authService: AuthService,
    private matchValidator: MatchPassword
  ) {}

  userSignupForm = new FormGroup(
    {
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      phone_number: new FormControl('', [Validators.required]),
      user_name: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
        [this.uniqueUsername.validate]
      ),
      email: new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
        ],
        [this.uniqueEmail.validate]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl(''),
    }
    // {
    //   validators: [this.matchValidator.validate],
    // }
  );

  get controls() {
    return this.userSignupForm.controls;
  }

  ngOnInit() {
    this.authData = this.authService.getAuthData$
      .pipe(
        map((value) => value.uuid),
        exhaustMap((uuid) =>
          this.http.get(`${environment.URL}/user/${uuid}/info`)
        ),
        catchError((err) => of({})),
        finalize(() => {
          this.myInfoMode = false;
        })
      )
      .subscribe((data: any) => {
        console.log('asdasasdf...', data.data);
        if (data.success) {
          this.myInfoMode = true;
          this.userSignupForm.patchValue(data.data);
        }
      });

    console.log('cotrols..', this.controls);
  }

  onSubmit() {
    if (this.userSignupForm.status === 'INVALID') {
      return;
    } else {
      const userData = this.userSignupForm?.value;

      if (userData.user_name && userData.email && userData.password) {
        const user = {
          first_name: userData.first_name,
          last_name: userData.last_name,
          user_name: userData.user_name,
          email: userData.email,
          password: userData.password,
          passwordConfirmation: userData.passwordConfirmation,
        };

        this.authService.signup(user).subscribe((data) => {
          console.log(data);
        });
      }
    }
  }

  ngOnDestroy() {
    this.authData.unsubscribe();
  }
}
