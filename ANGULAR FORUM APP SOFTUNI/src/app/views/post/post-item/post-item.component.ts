import { Component, OnInit } from '@angular/core';
import {HeaderService} from '../../../services/header.service.client';
import {SharedService} from '../../../services/shared.service.client';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../../services/post.service.client';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  postId;
  post = {title: '', content: '', dateCreated: ''};

  constructor(public header: HeaderService, private sharedService: SharedService, private userService: UserService, private router: Router, private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.header.show();
    this.route.params.subscribe((params) => {
      this.postId = params['pid'];
    });
    this.postService.findPostById(this.postId)
      .subscribe((post) => {
        this.post = post;
      });
  }

}
