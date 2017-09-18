import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs/Rx';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

const UrlBase = 'http://localhost:3000/posts';

@Injectable()
export class MisHistorietasService {

  constructor(private http: Http) { }

  getPosts(): Observable<Post[]> {
    return this.http.get(UrlBase + '?person.id=1')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  addPost(post: Post): Observable<Post[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(UrlBase, post, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
