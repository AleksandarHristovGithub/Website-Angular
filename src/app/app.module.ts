import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './views/user/login/login.component';
import {RegisterComponent} from './views/user/register/register.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {FormsModule} from '@angular/forms';

import {HttpModule} from '@angular/http';

import {HeaderComponent} from './views/header/header.component';
import {UserService} from './services/user.service.client';
import {HeaderService} from './services/header.service.client';
import {HomepageComponent} from './views/homepage/homepage.component';
import {AuthGuard} from './services/auth-guard.service';
import {SharedService} from './services/shared.service.client';
import { PostsStreamComponent } from './views/posts-stream/posts-stream.component';
import {PostService} from './services/post.service.client';
import { PostItemComponent } from './views/post/post-item/post-item.component';
import { PostNewComponent } from './views/post/post-new/post-new.component';
import { PostEditComponent } from './views/post/post-edit/post-edit.component';
import { PostListComponent } from './views/post/post-list/post-list.component';
import {GuestGuard} from './services/guest-guard.service';
import {CommentService} from './services/comment.service.client';
import { CommunityComponent } from './views/community/community.component';
import { AgmCoreModule } from '@agm/core';
import {MapService} from './services/map.service.client';
import {HttpClientModule} from '@angular/common/http';
import { CommentListComponent } from './views/comment/comment-list/comment-list.component';
import { CommentNewComponent } from './views/comment/comment-new/comment-new.component';
import { ManageComponent } from './views/manage/manage.component';
import {AdminGuard} from './services/admin-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomepageComponent,
    ProfileComponent,
    PostsStreamComponent,
    PostItemComponent,
    PostNewComponent,
    PostEditComponent,
    PostListComponent,
    CommunityComponent,
    CommentListComponent,
    CommentNewComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD1ySa5yEqN1VPjmmyU4G5Rgb5OLokocoY'
    })
  ],
  providers: [UserService, HeaderService, AuthGuard, SharedService, PostService, GuestGuard, CommentService, MapService, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
