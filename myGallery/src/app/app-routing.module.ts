import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeviewComponent } from './homeview/homeview.component';
import { ThreedComponent } from './threed/threed.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: HeaderComponent },
  { path: 'home', component: HomeviewComponent },
  { path: 'threed', component: ThreedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
