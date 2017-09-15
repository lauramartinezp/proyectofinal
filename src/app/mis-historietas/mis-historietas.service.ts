import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs/Rx';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class MisHistorietasService {

  constructor(private http: Http) { }

  getPost(): Observable<Post[]> {
    return this.http.get('http://localhost:3000/posts')
      .map( (res: Response) => res.json())
      .catch( (error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  addPost(post: Post): Observable<Post[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:3000/post', post, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
