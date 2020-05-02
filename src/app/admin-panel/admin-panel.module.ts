import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../auth/services/auth.service';
import {AdminPanelComponent} from './admin-panel.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminPanelComponent
  ],
  providers: [AuthService]
})
export class AdminPanelModule {
}
