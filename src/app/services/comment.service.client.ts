import {Post} from '../models/post.model';
import {Subject} from 'rxjs';
import {environment} from '../../environments/environment';
import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class CommentService {

  baseUrl = environment.baseUrl;

  constructor(private http: Http) {}

  createComment(postId: string, comment) {
    comment.postId = postId;
    return this.http.post(this.baseUrl + '/api/post/' + postId + '/comment-list', comment)
      .map((res: Response) => {
        return res.json();
      });
  }

  findAllComments() {
    return this.http.get(this.baseUrl + '/api/comments')
      .map((res: Response) => {
        return res.text() ? res.json() : [];
      });
  }

  findAllCommentsForPost(postId: string) {
    return this.http.get(this.baseUrl + '/api/post/' + postId + '/comment-list')
      .map((res: Response) => {
        return res.text() ? res.json() : [];
      });
  }

  findCommentById(commentId: string) {
    return this.http.get(this.baseUrl + '/api/comment-list/' + commentId)
      .map((res: Response) => {
        return res.text() ? res.json() : undefined;
      });
  }

  updateComment(commentId: string, newComment) {
    return this.http.put(this.baseUrl + '/api/comment-list/' + commentId, newComment)
      .map((res: Response) => {
        return res.json();
      });
  }

  deleteComment(commentId: string) {
    return this.http.delete(this.baseUrl + '/api/comment-list/' + commentId)
      .map((res: Response) => {
        return res.json();
      });
  }
}
