import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { GuardOne } from './_services/guard-one';
import { GuardTwo } from './_services/guard-two';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent,
    canActivate: [GuardOne],},
  { path: 'tutorials/:id', component: TutorialDetailsComponent ,
    canActivate: [GuardOne],},
  { path: 'add', component: AddTutorialComponent,
    canActivate: [GuardOne],},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent ,
    canActivate: [GuardTwo],},
  { path: 'register', component: RegisterComponent ,
    canActivate: [GuardTwo],},
  { path: 'profile', component: ProfileComponent ,
    canActivate: [GuardOne],},
  { path: 'user', component: BoardUserComponent ,
    canActivate: [GuardOne],},
  { path: 'mod', component: BoardModeratorComponent ,
    canActivate: [GuardOne],},
  { path: 'admin', component: BoardAdminComponent ,
    canActivate: [GuardOne],},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
