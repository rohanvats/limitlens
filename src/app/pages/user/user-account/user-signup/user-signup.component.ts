import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, SimpleChange, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { noop } from 'rxjs';
import { ToastService } from 'src/app/helper/toast.service';
import { MatchPassword } from 'src/app/helper/validators/match-password';
import { UniqueEmail } from 'src/app/helper/validators/unique-email';
import { UniqueUsername } from 'src/app/helper/validators/unique-username';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss'],
})
export class UserSignupComponent implements OnInit {
  myInfoMode = false;
  @Input() userData: any;

  toastService = inject(ToastService);
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

  ngOnChanges(change: SimpleChange) {
    if (change) {
      if (this.userData) {
        console.log('user data...', this.userData);
        this.myInfoMode = true;
        this.userSignupForm.patchValue(this.userData.data);
      }
    }
  }

  ngOnInit() {}

  onSubmit() {
    if (this.userSignupForm.status === 'INVALID') {
      this.toastService.PresentToast('The form is not valid');
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

        if (!this.myInfoMode) {
          this.authService.signup(user).subscribe((data) => {
            console.log(data);
            noop;
          });
        } else {
          this.authService.updateUser(user).subscribe((data) => {
            console.log('data...', data);
            noop;
          });
        }
      }
    }
  }
}
