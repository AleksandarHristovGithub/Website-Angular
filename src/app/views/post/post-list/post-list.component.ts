import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../../services/header.service.client';
import {SharedService} from '../../../services/shared.service.client';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {PostService} from '../../../services/post.service.client';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  userId = null;
  username;
  posts = [];

  constructor(public header: HeaderService, private sharedService: SharedService, private userService: UserService, private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.header.show();
    if (this.sharedService.user) {
      this.userId = this.sharedService.user._id;
    }
    this.posts = this.postService.userPosts;
    if (this.posts.length > 0) {
      this.username = this.posts[0].username;
    }
  }

  onPostDetail(postId) {
    if (this.userId !== null) {
      this.router.navigate(['/stream', postId]);
    } else {
      alert("You must login to see the post details");
      return false;
    }
  }

}
