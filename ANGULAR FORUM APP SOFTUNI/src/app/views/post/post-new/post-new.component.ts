import {Component, OnInit, ViewChild} from '@angular/core';
import {HeaderService} from '../../../services/header.service.client';
import {SharedService} from '../../../services/shared.service.client';
import {UserService} from '../../../services/user.service.client';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {PostService} from '../../../services/post.service.client';
import * as faker from 'faker';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.css']
})
export class PostNewComponent implements OnInit {

  @ViewChild("f") postForm = NgForm;
  post = {userId: '', username: '', title: '', content: '', imagePath: ''};
  userId;
  username;

  constructor(public header: HeaderService, private sharedService: SharedService, private userService: UserService, private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.userId = this.sharedService.user._id;
    this.username = this.sharedService.user.username;
    this.header.show();
  }

  onNewPost() {
    this.post.userId = this.userId;
    this.post.username = this.username;
    if (this.post.imagePath === '' || !this.post.imagePath) {
      this.post.imagePath = faker.image.nature();
    }
    // console.log(this.post.imagePath);
    this.postService.createPost(this.userId, this.post)
      .subscribe(() => {
        this.router.navigate(['/stream']);
      })
  }

}
