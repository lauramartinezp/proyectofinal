import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Person } from '../models/person.model';
import { Post } from '../models/post.model';

const UrlBase = 'http://localhost:3000/persons/';

@Injectable()
export class PersonService {

    constructor(private http: Http) { }
    getPerson(): Observable<Person> {
        return this.http.get(`${UrlBase}1`)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    getPersons(): Observable<Person[]> {
        return this.http.get(`${UrlBase}`)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

}
