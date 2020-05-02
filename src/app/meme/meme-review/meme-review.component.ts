import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './meme-review.component.html',
  styleUrls: ['./meme-review.component.css']
})
export class MemeReviewComponent implements OnInit {

  trashIcon;
  private memesData;
  private page: number;
  private pagesCount: number;
  private readonly mediaLimit: number;

  memesUrl = '/api/memes/page';

  constructor(private readonly http: HttpClient,
              readonly auth: AuthService) {
    this.trashIcon = faTrashAlt;
    this.mediaLimit = 10;
    this.page = 1;
  }

  async ngOnInit(): Promise<void> {
    const params = {
      number: '1',
      limit: this.mediaLimit.toString(),
    };
    this.memesData = await this.http.get(this.memesUrl, {params}).toPromise();

    const countUrl = '/api/memes/count';
    const mediaCount: any = await this.http.get(countUrl).toPromise();
    this.pagesCount = Math.ceil(mediaCount / this.mediaLimit);
  }

  async nextPage() {
    if (this.page >= this.pagesCount) {
      return;
    }

    const params = {
      number: (++this.page).toString(),
      limit: this.mediaLimit.toString(),
    };
    this.memesData = await this.http.get(this.memesUrl, {params}).toPromise();
  }

  async previousPage() {
    if (this.page <= 1) {
      return;
    }

    const params = {
      number: (--this.page).toString(),
      limit: this.mediaLimit.toString(),
    };
    this.memesData = await this.http.get(this.memesUrl, {params}).toPromise();
  }

  get MemesData() {
    return this.memesData;
  }

  async deleteMeme(id: string) {
    await this.http.delete(`/api/memes/${id}`).toPromise();
    window.location.reload();
  }
}
