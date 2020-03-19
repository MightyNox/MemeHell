import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

export interface Credentials {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly http: HttpClient,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      nickname: ['', [Validators.required, Validators.min(3)]],
      password: ['', [Validators.required, Validators.min(5)]],
    });
  }

  async login() {
    if (!this.loginForm.valid) {
      return;
    }

    const formValues = this.loginForm.value;
    const credentials: Credentials = {
      username: formValues.nickname,
      password: formValues.password,
    };

    const url = '/api/users/auth';
    await this.http.post(url, credentials).toPromise();
    await this.router.navigate(['home']);
  }
}
