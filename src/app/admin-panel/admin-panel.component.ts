import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../auth/models/user.model';
import {faBan} from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../auth/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  banIcon;
  usersCount: number;
  commentsCount: number;
  memesCount: number;
  users: User[];

  constructor(private readonly http: HttpClient,
              private readonly auth: AuthService) {
    this.banIcon = faBan;
  }

  async ngOnInit(): Promise<void> {
    this.users = (await this.http.get('/api/all').toPromise()) as any[];
    this.usersCount = this.users.length;

    const comments: any = await this.http.get('/api/comments/get').toPromise();
    this.commentsCount = comments.length;

    this.memesCount = (await this.http.get('/api/memes/count').toPromise()) as number;
  }

  async banUser(id: string) {
    const headers = {
      Authorization: `Bearer ${this.auth.CurrentUser.token}`
    };
    await this.http.put(`/api/admin/ban/${id}`, {}, {headers}).toPromise();
    window.location.reload();
  }
}
