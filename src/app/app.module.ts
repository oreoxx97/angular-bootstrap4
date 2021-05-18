import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainsComponent } from './mains/mains.component';
import { ContentComponent } from './content/content.component';
import { FootersComponent } from './footers/footers.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { VideoComponent } from './video/video.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainsComponent,
    ContentComponent,
    FootersComponent,
    SidebarComponent,
    VideoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
