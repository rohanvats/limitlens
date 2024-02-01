import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.scss'],
})
export class UserSigninComponent implements OnInit {
  constructor(private authService: AuthService) {}

  get controls() {
    return this.userLoginForm.controls;
  }

  ngOnInit() {}

  userLoginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    // console.log('value...', this.userLoginForm.value);
    this.authService.login(this.userLoginForm.value).subscribe((data) => {
      console.log('user data...', data);
    });
  }
}
