import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './meme-review.component.html',
  styleUrls: ['./meme-review.component.css']
})
export class MemeReviewComponent implements OnInit {

  private memesData;

  constructor(private readonly http: HttpClient) {
  }

  async ngOnInit(): Promise<void> {
    const url = '/api/memes/get';
    this.memesData = await this.http.get(url).toPromise();
  }

  get MemesData() {
    return this.memesData;
  }
}
