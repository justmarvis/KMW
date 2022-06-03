import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ThreedComponent } from './threed/threed.component';
import { HomebuttonComponent } from './homebutton/homebutton.component';
import { HomeviewComponent } from './homeview/homeview.component';
import { AppRoutingModule } from './app-routing.module';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThreedComponent,
    HomebuttonComponent,
    HomeviewComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
