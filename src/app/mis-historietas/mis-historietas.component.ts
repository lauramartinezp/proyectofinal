import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { MisHistorietasService } from './mis-historietas.service';

@Component({
  selector: 'app-mis-historietas',
  templateUrl: './mis-historietas.component.html',
  styleUrls: ['./mis-historietas.component.css']
})
export class MisHistorietasComponent implements OnInit {

  post: Post[];

  constructor(private misHistorietasService: MisHistorietasService) { }

  ngOnInit() {
    this.misHistorietasService.getPost().subscribe(post => this.post = post);
  }

}
