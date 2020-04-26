import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../../models/user.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly http: HttpClient,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nickname: ['', [Validators.required, Validators.min(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(5)]],
    });
  }

  async register() {
    if (!this.registerForm.valid) {
      alert('User form is not valid!'); // TODO add baner
      return;
    }

    const formValues = this.registerForm.value;
    const user: Partial<User> = {
      nickname: formValues.nickname,
      email: formValues.email,
      password: formValues.password,
      rank: 'user'
    };

    const url = '/api/users/register';
    await this.http.post(url, user).toPromise();
    await this.router.navigate(['login']);
  }
}
