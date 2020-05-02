import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../auth/services/auth.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './meme-view.component.html',
  styleUrls: ['./meme-view.component.css']
})
export class MemeViewComponent implements OnInit {

  trashIcon;
  public meme: any;
  public comments: any;

  public commentForm: FormGroup;

  constructor(private readonly http: HttpClient,
              private readonly route: ActivatedRoute,
              readonly auth: AuthService,
              private readonly formBuilder: FormBuilder) {
    this.commentForm = this.formBuilder.group({
      commentText: [],
    });
    this.trashIcon = faTrashAlt;
  }

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    this.meme = await this.http.get(`/api/memes/get/${id}`).toPromise();
    await this.getComments();
  }

  async rateUp() {
    const headers = {
      Authorization: `Bearer ${this.auth.CurrentUser.token}`
    };
    await this.http.put(`/api/memes/rateplus/${this.meme.id}`, {}, {headers}).toPromise();
    window.location.reload();
  }

  async addComment() {
    const headers = {
      Authorization: `Bearer ${this.auth.CurrentUser.token}`
    };
    const body = {
      Content: this.commentForm.value.commentText,
      memeId: this.meme.id
    };
    await this.http.post(`api/comments`, body, {headers}).toPromise();
    await this.getComments();
    window.location.reload();
  }

  private async getComments() {
    this.comments = await this.http.get(`api/comments/getbyid?id=${this.meme.id}`).toPromise();
  }

  async deleteComment(id: string) {
    await this.http.delete(`/api/comments/${id}`).toPromise();
    window.location.reload();
  }
}
