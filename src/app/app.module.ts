import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './routing/app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {MenuComponent} from './menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AuthModule} from './auth/auth.module';
import {HttpClientModule} from '@angular/common/http';
import {MemeModule} from './meme/meme.module';
import {AdminPanelModule} from './admin-panel/admin-panel.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    FontAwesomeModule,
    MemeModule,
    AuthModule,
    HttpClientModule,
    AdminPanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
