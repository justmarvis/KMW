import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeviewComponent } from './homeview/homeview.component';
import { SigininComponent } from './siginin/siginin.component';
import { SignupComponent } from './signup/signup.component';
import { ThreedComponent } from './threed/threed.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: HeaderComponent },
  { path: 'home', component: HomeviewComponent },
  { path: 'signIn', component: SigininComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'threed', component: ThreedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
