import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-logout',
  template: ''
})
export class LogoutComponent implements OnInit {

  constructor(private readonly authService: AuthService) {
  }

  async ngOnInit(): Promise<void> {
    await this.authService.logout();
  }
}
