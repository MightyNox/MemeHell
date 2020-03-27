import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Routing} from './routes-map';
import {RoutingGuardService} from './routing-guard.service';


@NgModule({
  imports: [Routing],
  providers: [RoutingGuardService],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
