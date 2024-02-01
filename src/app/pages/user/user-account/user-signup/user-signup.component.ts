import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchPassword } from 'src/app/helper/validators/match-password';
import { UniqueUsername } from 'src/app/helper/validators/unique-username';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss'],
})
export class UserSignupComponent implements OnInit {
  constructor(
    private uniqueUsername: UniqueUsername,
    private authService: AuthService,
    private matchValidator: MatchPassword
  ) {}

  userSignupForm = new FormGroup(
    {
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
        [this.uniqueUsername.validate]
      ),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [Validators.required]),
    },
    {
      validators: [this.matchValidator.validate],
    }
  );

  get controls() {
    return this.userSignupForm.controls;
  }

  ngOnInit() {}

  onSubmit() {
    if (this.userSignupForm.status === 'INVALID') {
      return;
    } else {
      const userData = this.userSignupForm?.value;

      if (
        userData.username &&
        userData.email &&
        userData.password &&
        userData.passwordConfirmation
      ) {
        const user = {
          username: userData.username,
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
}
