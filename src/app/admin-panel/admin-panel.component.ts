import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  usersCount: number;
  commentsCount: number;
  memesCount: number;

  constructor(private readonly http: HttpClient) {

  }

  async ngOnInit(): Promise<void> {
    const users: any = await this.http.get('/api/all').toPromise();
    this.usersCount = users.length;

    const comments: any = await this.http.get('/api/comments/get').toPromise();
    this.commentsCount = comments.length;

    this.memesCount = (await this.http.get('/api/memes/count').toPromise()) as number;
  }

}
