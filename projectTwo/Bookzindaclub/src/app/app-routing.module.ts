import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPostComponent } from './components/user-post/user-post.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/register/registration.component';

const routes: Routes = [
  {path: '', component: UserPostComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
