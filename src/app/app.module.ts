import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './component/about-me/about-me.component';
import { MainPageComponent } from './component/main-page/main-page.component';
import { MessageBoardComponent } from './component/message-board/message-board.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {GeneraljwtInterceptor} from "./interceptors/generaljwt.interceptor";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    MainPageComponent,
    MessageBoardComponent
  ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
    HttpClientModule,
    ReactiveFormsModule
	],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: GeneraljwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
