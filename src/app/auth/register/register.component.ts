import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';


export interface User {
  id?: string;
  nickname: string;
  email: string;
  password: string;
  rank: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly http: HttpClient) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nickname: ['', [Validators.required, Validators.min(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(5)]],
    });
  }

  async onSubmit() {
    if (!this.registerForm.valid) {
      alert('User form is not valid!!');
      return;
    }

    const formValues = this.registerForm.value;
    const user: User = {
      nickname: formValues.nickname,
      email: formValues.email,
      password: formValues.password,
      rank: 'user'
    };

    const url = '/api/users/register';
    await this.http.post(url, user).toPromise();
  }

  async register() {

  }
}
