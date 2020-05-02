import {Component, OnInit} from '@angular/core';
import {
  faChartPie,
  faFileUpload,
  faHome,
  faImages,
  faSignInAlt,
  faSignOutAlt,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../auth/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  icons = {
    home: faHome,
    memeReview: faImages,
    memeUpload: faFileUpload,
    register: faUserPlus,
    login: faSignInAlt,
    logout: faSignOutAlt,
    stats: faChartPie
  };

  constructor(readonly authService: AuthService) {
  }

  ngOnInit(): void {
  }

}
