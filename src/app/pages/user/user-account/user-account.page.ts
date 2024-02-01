import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatchPassword } from 'src/app/helper/validators/match-password';
import { UniqueUsername } from 'src/app/helper/validators/unique-username';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.page.html',
  styleUrls: ['./user-account.page.scss'],
})
export class UserAccountPage implements OnInit {
  // userSignupForm = new FormGroup({
  //   username: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(4),
  //     Validators.maxLength(10),
  //     Validators.pattern(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/),
  //   ]),
  //   firstName: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(4),
  //     Validators.maxLength(10),
  //   ]),
  //   lastName: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(4),
  //     Validators.maxLength(10),
  //   ]),
  //   email: new FormControl('', [
  //     Validators.minLength(4),
  //     Validators.maxLength(10),
  //   ]),
  //   password: new FormControl('', [
  //     Validators.minLength(10),
  //     Validators.maxLength(12),
  //   ]),
  //   mobile: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(10),
  //     Validators.maxLength(12),
  //   ]),
  //   // address: new FormGroup({
  //   addLine1: new FormControl('', Validators.required),
  //   addLine2: new FormControl('', Validators.required),
  //   zipCode: new FormControl('', Validators.required),
  //   city: new FormControl('', Validators.required),
  //   state: new FormControl('', Validators.required),
  //   country: new FormControl('', Validators.required),
  //   // }),
  // });

  constructor(
    private matchValidator: MatchPassword,
    private uniqueUsername: UniqueUsername,
    private authService: AuthService
  ) {}

  // userSignupForm = new FormGroup(
  //   {
  //     username: new FormControl(
  //       '',
  //       [
  //         Validators.required,
  //         Validators.minLength(3),
  //         Validators.maxLength(10),
  //       ],
  //       [this.uniqueUsername.validate]
  //     ),
  //     email: new FormControl('', [
  //       Validators.required,
  //       Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
  //     ]),
  //     password: new FormControl('', [
  //       Validators.required,
  //       Validators.minLength(8),
  //       Validators.maxLength(20),
  //     ]),
  //     passwordConfirmation: new FormControl('', [Validators.required]),
  //   },
  //   {
  //     validators: [this.matchValidator.validate],
  //   }
  // );

  // userLoginForm = new FormGroup({
  //   email: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required),
  // });

  // get controls() {
  //   return this.userSignupForm.controls;
  // }

  ngOnInit() {}

  // onSubmit() {
  //   // console.log(this.controls.username);
  //   // console.log('sign up: ', this.userSignupForm.value);

  //   if (this.userSignupForm.status === 'INVALID') {
  //     return;
  //   } else {
  //     const userData = this.userSignupForm?.value;

  //     // console.log(this.userSignupForm.value);

  //     if (
  //       userData.username &&
  //       userData.email &&
  //       userData.password &&
  //       userData.passwordConfirmation
  //     ) {
  //       const user = {
  //         username: userData.username,
  //         email: userData.email,
  //         password: userData.password,
  //         passwordConfirmation: userData.passwordConfirmation,
  //       };

  //       this.authService.signup(user).subscribe((data) => {
  //         console.log(data);
  //       });
  //     }
  //   }
  // }

  // onSubmit() {
  //   console.log('value...', this.userLoginForm.value);
  //   this.authService.login(this.userLoginForm.value).subscribe((data) => {
  //     console.log('user data...', data);
  //   });
  // }
}
