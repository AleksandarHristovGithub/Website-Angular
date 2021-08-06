import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service.client';
import {PostService} from '../../services/post.service.client';
import {SharedService} from '../../services/shared.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-posts-stream',
  templateUrl: './posts-stream.component.html',
  styleUrls: ['./posts-stream.component.css']
})
export class PostsStreamComponent implements OnInit {

  userId = null;
  user = {type: ''};
  posts = [];

  constructor(public header: HeaderService, private postService: PostService, private sharedService: SharedService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.header.show();
    if (this.sharedService.user) {
      this.userId = this.sharedService.user._id;
      this.user = this.sharedService.user;
    }
    this.postService.findAllPosts()
      .subscribe((posts) => {
        this.posts = posts;
      });
  }

  onGetUserPosts(userId) {
    this.postService.findPostsByUser(userId)
      .subscribe(posts => {
        this.postService.userPosts = posts;
        this.router.navigate(['/user/posts']);
      });
  }

  onPostDetail(postId) {
    if (this.userId !== null) {
      this.router.navigate(['/stream', postId]);
    } else {
      alert("You must login to see the post details");
      return false;
    }
  }

  onDelete(postId) {
    this.postService.deletePost(postId).subscribe((post) => {
          this.router.navigate(['/home']);
        }
    );
  }

}
