import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './views/user/login/login.component';
import {RegisterComponent} from './views/user/register/register.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {HomepageComponent} from './views/homepage/homepage.component';
import {AuthGuard} from './services/auth-guard.service';
import {PostsStreamComponent} from './views/posts-stream/posts-stream.component';
import {PostNewComponent} from './views/post/post-new/post-new.component';
import {PostItemComponent} from './views/post/post-item/post-item.component';
import {PostListComponent} from './views/post/post-list/post-list.component';
import {CommunityComponent} from './views/community/community.component';
import {GuestGuard} from './services/guest-guard.service';
import {CommentListComponent} from './views/comment/comment-list/comment-list.component';
import {CommentNewComponent} from './views/comment/comment-new/comment-new.component';
import {ManageComponent} from './views/manage/manage.component';
import {AdminGuard} from './services/admin-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'stream', component: PostsStreamComponent, canActivate: [AuthGuard] },
  { path: 'guest', component: PostsStreamComponent, canActivate: [GuestGuard] },
  { path: 'user/posts', component: PostListComponent, canActivate: [AuthGuard] },
  { path: 'stream/new', component: PostNewComponent, canActivate: [AuthGuard] },
  { path: 'stream/:pid', component: PostItemComponent, canActivate: [AuthGuard] },
  { path: 'stream/:pid/comment', component: CommentListComponent, canActivate: [ AuthGuard ] },
  { path: 'stream/:pid/comment/new', component: CommentNewComponent, canActivate: [ AuthGuard ] },
  { path: 'community', component: CommunityComponent, canActivate: [AuthGuard] },
  { path: 'manage', component: ManageComponent, canActivate: [AuthGuard, AdminGuard] },

  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
