import { Component, OnInit } from '@angular/core';
import { Relate } from '../models/relate.model';
import { RelateService } from './relate.service';

@Component({
  selector: 'app-proxcolegas',
  templateUrl: './proxcolegas.component.html',
  styleUrls: ['./proxcolegas.component.css']
})
export class ProxcolegasComponent implements OnInit {

  relatesRelater: Relate[];
  relatesRelated: Relate[];

  constructor(private relateService: RelateService) { }

  ngOnInit() {
    this.relateService.getRelateRequester()
      .subscribe(relates => this.relatesRelater = relates);
    this.relateService.getRelateRequested()
      .subscribe(relates => {
        this.relatesRelated = relates;
        this.relatesRelated.forEach(relate => {
          this.relatesRelater.push(relate);
        });
      });
  }

  accept(relate: Relate) {
    relate.accepted = true;
    this.relateService.acceptRelate(relate)
      .subscribe(relates => this.relatesRelater = relates);
  }

  refuse(relate: Relate) {
    this.relateService.removeRelate(relate)
      .subscribe(relates => this.relatesRelater = relates);
    this.ngOnInit();
  }

}
