import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserPostComponent } from './components/user-post/user-post.component';

import { HttpClientModule } from '@angular/common/http';

import { ReviewsService } from './services/reviews/reviews.service'
import { UserService } from './services/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ReviewsService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
