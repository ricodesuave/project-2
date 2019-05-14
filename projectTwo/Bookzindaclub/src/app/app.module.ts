import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClubCreationFormComponent } from './components/club-creation-form/club-creation-form.component';
import { ClubServiceService } from './services/club-service.service';

import { NavbarComponent } from './components/navbar/navbar.component';
import { UserPostComponent } from './components/user-post/user-post.component';
import { ClubLookupComponent } from './components/club-lookup/club-lookup.component';
import { ClubManagementViewComponent } from './components/club-management-view/club-management-view.component';
import { ClubListComponent } from './components/club-list/club-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClubCreationFormComponent,
    NavbarComponent,
    UserPostComponent,
    ClubLookupComponent,
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
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  providers: [ClubServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
