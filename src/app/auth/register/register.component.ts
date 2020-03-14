import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nickname: ['', [Validators.required, Validators.min(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(5)]],
      passwordConfirm: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(10), Validators.max(99)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      alert('User form is valid!!');
    } else {
      alert('User form is not valid!!');
    }
  }
}
