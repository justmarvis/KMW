import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ThreedComponent } from './threed/threed.component';
import { HomebuttonComponent } from './homebutton/homebutton.component';
import { HomeviewComponent } from './homeview/homeview.component';
import { AppRoutingModule } from './app-routing.module';
import { BoardComponent } from './board/board.component';
import { CategoryComponent } from './category/category.component';
import { UploadbuttonComponent } from './uploadbutton/uploadbutton.component';
import { BackbuttonComponent } from './backbutton/backbutton.component';
import { HomeheaderComponent } from './homeheader/homeheader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThreedComponent,
    HomebuttonComponent,
    HomeviewComponent,
    BoardComponent,
    CategoryComponent,
    UploadbuttonComponent,
    BackbuttonComponent,
    HomeheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
