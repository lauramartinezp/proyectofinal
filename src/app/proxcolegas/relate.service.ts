import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Relate } from '../models/relate.model';

const UrlBase = 'http://localhost:3000/relations/';

@Injectable()
export class RelateService {

  constructor(private http: Http) { }
  getRelateRequester(): Observable<Relate[]> {
    return this.http.get(`${UrlBase}?requester.id=1`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getRelateRequested(): Observable<Relate[]> {
    return this.http.get(`${UrlBase}?requested.id=1`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  removeRelate(relate: Relate): Observable<Relate[]> {
    return this.http.delete(`${UrlBase}${relate.id}`)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  acceptRelate(relate: Relate): Observable<Relate[]> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.put(UrlBase + relate.id, relate, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }
}
