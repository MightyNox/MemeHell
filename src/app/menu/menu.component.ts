import {Component, OnInit} from '@angular/core';
import {faFileUpload, faHome, faImages, faSignInAlt, faUserPlus} from '@fortawesome/free-solid-svg-icons';

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
    login: faSignInAlt
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
