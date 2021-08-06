import {Post} from '../models/post.model';
import {Subject} from 'rxjs';
import {environment} from '../../environments/environment';
import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class PostService {

  baseUrl = environment.baseUrl;
  userPosts = [];

  constructor(private http: Http) {}

  createPost(userId: string, post) {
    post.userId = userId;
    return this.http.post(this.baseUrl + '/api/user/' + userId + '/post', post)
      .map((res: Response) => {
        return res.json();
      });
  }

  findAllPosts() {
    return this.http.get(this.baseUrl + '/api/posts')
      .map((res: Response) => {
      return res.text() ? res.json() : [];
    });
  }

  findPostsByUser(userId: string) {
    return this.http.get(this.baseUrl + '/api/user/' + userId + '/post')
      .map((res: Response) => {
        return res.text() ? res.json() : undefined;
      });
  }

  findPostById(postId: string) {
    return this.http.get(this.baseUrl + '/api/post/' + postId)
      .map((res: Response) => {
        return res.text() ? res.json() : undefined;
      });
  }

  updatePost(postId: string, newPost) {
    return this.http.put(this.baseUrl + '/api/post/' + postId, newPost)
      .map((res: Response) => {
        return res.json();
      });
  }

  deletePost(postId: string) {
    return this.http.delete(this.baseUrl + '/api/post/' + postId)
      .map((res: Response) => {
        return res.json();
      });
  }
}
