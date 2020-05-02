import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {MemeReviewComponent} from '../meme/meme-review/meme-review.component';
import {MemeUploadComponent} from '../meme/meme-upload/meme-upload.component';
import {LoginComponent} from '../auth/components/login/login.component';
import {RegisterComponent} from '../auth/components/register/register.component';
import {RoutingGuardService} from './routing-guard.service';
import {LogoutComponent} from '../auth/components/logout/logout.component';
import {MemeViewComponent} from '../meme/meme-view/meme-view.component';
import {MemeTagCreationComponent} from '../meme/meme-tag-creation/meme-tag-creation.component';
import {AdminPanelComponent} from '../admin-panel/admin-panel.component';

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
    pathMatch: 'full',
    component: MemeReviewComponent
  },
  {
    path: 'meme/:id',
    component: MemeViewComponent,
    canActivate: [RoutingGuardService]
  },
  {
    path: 'meme-upload',
    component: MemeUploadComponent,
    canActivate: [RoutingGuardService]
  },
  {
    path: 'meme-tag',
    component: MemeTagCreationComponent,
    canActivate: [RoutingGuardService]
  },
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
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
