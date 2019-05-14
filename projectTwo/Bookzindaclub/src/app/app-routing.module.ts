import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPostComponent } from './components/user-post/user-post.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/register/registration.component';
import { LandingComponent } from './components/landing/landing.component';
import { BookLookupComponent } from './components/book-lookup/book-lookup.component';
import { ClubManagementViewComponent } from './components/club-management-view/club-management-view.component';
import { ClubLookupComponent } from './components/club-lookup/club-lookup.component';

const routes: Routes = [
  {path: '', component: LandingComponent },
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'reviews', component: UserPostComponent},
  {path: 'books', component: BookLookupComponent},
  {path: 'lookup', component: ClubLookupComponent},
  {path: 'manage', component: ClubManagementViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
