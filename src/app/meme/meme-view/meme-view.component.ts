import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './meme-view.component.html',
  styleUrls: ['./meme-view.component.css']
})
export class MemeViewComponent implements OnInit {

  public meme: any;

  constructor(private readonly http: HttpClient,
              private route: ActivatedRoute) {
  }

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    this.meme = await this.http.get(`/api/memes/get/${id}`).toPromise();
  }
}
