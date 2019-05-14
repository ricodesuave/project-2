import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule} from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatListModule} from '@angular/material/list';


import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClubCreationFormComponent } from './components/club-creation-form/club-creation-form.component';
import { ClubServiceService } from './services/club-service.service';

import { ReviewsService } from './services/reviews/reviews.service';
import { UserService } from './services/user/user.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserPostComponent } from './components/user-post/user-post.component';
import { ClubLookupComponent } from './components/club-lookup/club-lookup.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/register/registration.component';

import { MaterialModule } from './material/material.module';
import { LandingComponent } from './components/landing/landing.component';
import { HomeComponent } from './components/home/home.component';
import { MeetingPostComponent } from './components/meeting-post/meeting-post.component';
import { BookLookupComponent } from './components/book-lookup/book-lookup.component';
import { ClubMemberService } from './services/club-member.service';
import { ClubManagementViewComponent } from './components/club-management-view/club-management-view.component';
import { ClubListComponent } from './components/club-list/club-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClubCreationFormComponent,
    NavbarComponent,
    UserPostComponent,
    ClubLookupComponent,
    LoginComponent,
    RegistrationComponent,
    LandingComponent,
    HomeComponent,
    MeetingPostComponent,
    BookLookupComponent,
    ClubManagementViewComponent,
    ClubListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    NgbModule,
    MaterialModule,
    MatListModule
  ],
  providers: [ReviewsService, UserService, ClubServiceService, ClubMemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
