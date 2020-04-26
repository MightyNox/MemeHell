import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './meme-upload.component.html',
  styleUrls: ['./meme-upload.component.css']
})
export class MemeUploadComponent implements OnInit {

  public tags: string[];
  uploadForm: FormGroup;

  constructor(private readonly http: HttpClient,
              private readonly formBuilder: FormBuilder,
              private readonly authService: AuthService) {

    this.uploadForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.min(3)]],
      tags: ['', [Validators.required, Validators.min(1)]],
      file: ['', [Validators.required]]
    });
  }

  async ngOnInit() {
    const data: any = await this.http.get('/api/tags/get').toPromise();
    this.tags = data.map(tag => {
      return tag.name;
    });

  }

  async uploadMeme() {
    const formValue = this.uploadForm.value;
    const body = {
      Type: 'jpg', // TODO get
      Author: this.authService.CurrentUser.nickname,
      FileName: 'FileNameTest',
      Title: formValue.title,
      Tags: formValue.tags,
    };
    const headers = {
      Authorization: `Bearer ${this.authService.CurrentUser.token}`
    };
    await this.http.post('/api/memes', body, {headers}).toPromise();
  }
}
