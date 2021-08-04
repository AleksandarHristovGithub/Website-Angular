import {Component, OnInit, ViewChild} from '@angular/core';
import {HeaderService} from '../../../services/header.service.client';
import {PostService} from '../../../services/post.service.client';
import {SharedService} from '../../../services/shared.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentService} from '../../../services/comment.service.client';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-comment-new',
  templateUrl: './comment-new.component.html',
  styleUrls: ['./comment-new.component.css']
})
export class CommentNewComponent implements OnInit {

  @ViewChild("f") commentForm = NgForm;
  postId;
  user = {username: ''};
  comment = {postId: '', content: '', username: ''};

  constructor(public header: HeaderService, private postService: PostService, private sharedService: SharedService, private router: Router, private commentService: CommentService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.header.show();
    this.user = this.sharedService.user;
    this.route.params.subscribe((params) => {
      this.postId = params['pid'];
    });
  }

  onComment() {
    this.comment.postId = this.postId;
    this.comment.username = this.user.username;
    this.commentService.createComment(this.postId, this.comment)
      .subscribe(comment => {
        this.comment = comment;
      });
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
