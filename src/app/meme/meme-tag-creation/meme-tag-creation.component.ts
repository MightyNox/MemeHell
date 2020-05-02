import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './meme-tag-creation.component.html',
  styleUrls: ['./meme-tag-creation.component.css']
})
export class MemeTagCreationComponent implements OnInit {

  public tags: string[];
  createForm: FormGroup;

  constructor(private readonly http: HttpClient,
              private readonly formBuilder: FormBuilder,
              private readonly authService: AuthService) {

    this.createForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.min(3)]],
    });
  }

  async ngOnInit() {
  }

  async createTag() {
    const formValue = this.createForm.value;
    const body = {
      Name: formValue.title,
    };
    const headers = {
      Authorization: `Bearer ${this.authService.CurrentUser.token}`
    };
    await this.http.post('/api/tags', body, {headers}).toPromise();
  }
}
