import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../services/header.service.client';
import {PostService} from '../../services/post.service.client';
import {SharedService} from '../../services/shared.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service.client';
import {CommentService} from '../../services/comment.service.client';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  user = {_id: ''};
  users: [];
  posts: [];
  comments: [];

  constructor(public header: HeaderService, private postService: PostService, private sharedService: SharedService, private router: Router, private userService: UserService, private commentService: CommentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.header.show();
    this.user = this.sharedService.user;
    this.userService.findAllUsers().subscribe(users => {
      this.users = users;
    });
    this.postService.findAllPosts().subscribe(posts => {
      this.posts = posts;
    });
    this.commentService.findAllComments().subscribe(comments => {
      this.comments = comments;
    });
  }

  onDeleteUser(userId) {
    if (this.user._id !== userId) {
      this.userService.deleteUser(userId).subscribe();
    }
    this.router.navigate(['/home'], {relativeTo: this.route});
  }

  onDeletePost(postId) {
    this.postService.deletePost(postId).subscribe();
    this.router.navigate(['/home'], {relativeTo: this.route});
  }

  onDeleteComment(commentId) {
    this.commentService.deleteComment(commentId).subscribe();
    this.router.navigate(['/home'], {relativeTo: this.route});
  }
}
