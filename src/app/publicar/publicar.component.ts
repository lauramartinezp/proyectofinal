import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Post } from '../models/post.model';
import { Person } from '../models/person.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MisHistorietasService } from '../mis-historietas/mis-historietas.service';
import { PersonService } from './person.service';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent implements OnInit {
  posts: Post[];
  person: Person;
  form: FormGroup;
  post = new FormControl('', Validators.required);

  constructor(private postService: MisHistorietasService, fb: FormBuilder, private personService: PersonService, 
    private cd: ChangeDetectorRef) {
    this.form = fb.group({
      'post': this.post
    });
  }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);
    this.personService.getPerson().subscribe(person => this.person = person);
  }

  postPost() {
    const post: Post = new Post();
    post.person = this.person;
    post.publish = new Date();
    post.text = this.form.value.post;
    this.postService.addPost(post).subscribe(posts => {
      this.posts = posts;
    });
  }

}
