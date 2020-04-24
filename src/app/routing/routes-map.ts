import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {MemeReviewComponent} from '../meme/meme-review/meme-review.component';
import {MemeUploadComponent} from '../meme/meme-upload/meme-upload.component';
import {LoginComponent} from '../auth/components/login/login.component';
import {RegisterComponent} from '../auth/components/register/register.component';
import {RoutingGuardService} from './routing-guard.service';
import {LogoutComponent} from '../auth/components/logout/logout.component';
import {MemeViewComponent} from '../meme/meme-view/meme-view.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'meme',
    component: MemeReviewComponent
  },
  {
    path: 'meme/:id',
    component: MemeViewComponent
  },
  {
    path: 'meme/upload',
    component: MemeUploadComponent,
    canActivate: [RoutingGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];
export const Routing = RouterModule.forRoot(routes);
