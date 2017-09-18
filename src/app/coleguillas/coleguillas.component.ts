import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person.model';
import { Relate } from '../models/relate.model';
import { PersonService } from '../publicar/person.service';
import { RelateService } from '../proxcolegas/relate.service';

@Component({
  selector: 'app-coleguillas',
  templateUrl: './coleguillas.component.html',
  styleUrls: ['./coleguillas.component.css']
})
export class ColeguillasComponent implements OnInit {

  relatesRelater: Relate[];
  relatesRelated: Relate[];
  persons: Person[];
  person: Person;
  personsSelected: Person[];
  loaded: boolean;

  constructor(private relateService: RelateService, private personService: PersonService) { }

  ngOnInit() {
    this.loaded = false;
    this.relateService.getRelateRequester()
      .subscribe(relates => this.relatesRelater = relates);
    this.relateService.getRelateRequested()
      .subscribe(relates => {
        this.relatesRelated = relates;
        this.relatesRelated.forEach(relate => {
          this.relatesRelater.push(relate);
        });
      });
    this.personService.getPerson()
      .subscribe(person => this.person = person);
    this.personService.getPersons()
      .subscribe(persons => {
        this.persons = persons;
        this.loaded = true;
      });
    this.personsSelected = new Array();
  }

  accept(relate: Relate) {
    relate.accepted = true;
    this.relateService.acceptRelate(relate)
      .subscribe(relates => this.relatesRelater = relates);
  }

  refuse(person: Person) {
    this.relatesRelater.forEach(relate => {
      if (relate.requested.id === person.id) {
        this.relateService.removeRelate(relate)
          .subscribe(relates => this.relatesRelater = relates);
        this.ngOnInit();
      } else if (relate.requester.id === person.id) {
        this.relateService.removeRelate(relate)
          .subscribe(relates => this.relatesRelater = relates);
        this.ngOnInit();
      }
    });
  }

  isFriend(person: Person): boolean {
    // this.relatesRelater.forEach(relate => {
    //   if(relate.requested.id === person.id && relate.accepted === true) {
    //     console.log(relate.requested.id + person.id);
    //     return true;
    //   } else if(relate.requester.id === person.id && relate.accepted === true) {
    //     return true;
    //   }
    // });
    for (let index = 0; index < this.relatesRelater.length; index++) {
      if (this.relatesRelater[index].requested.id === person.id &&
        this.relatesRelater[index].accepted === true &&
        this.relatesRelater[index].requested.id !== 1) {
        return true;
      } else if (this.relatesRelater[index].requester.id === person.id &&
        this.relatesRelater[index].accepted === true &&
        this.relatesRelater[index].requester.id !== 1) {
        return true;
      }

    }
    return false;
  }

  selectPerson(person: Person) {
    if (person.selected === true) {
      person.selected = false;
    } else {
      this.persons.forEach(element => element.selected = false);
      person.selected = true;
      this.personsSelected = new Array();
      this.personsSelected.push(person);
    }
  }

}
