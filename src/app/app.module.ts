import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { MessageBoardComponent } from './component/message-board/message-board.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    MainPageComponent,
    MessageBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
