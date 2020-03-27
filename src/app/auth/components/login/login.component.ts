import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Credentials} from '../../models/credentials.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly authService: AuthService) {
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

    try {
      await this.authService.login(credentials);
    } catch (e) {
      if (e.status === 400) {
        alert('Invalid credentials!');
      }
    }
  }
}
