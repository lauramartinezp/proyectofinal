import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person.model';
import { PersonService } from '../publicar/person.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  person: Person;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personService.getPerson()
      .subscribe(person => this.person = person);
  }

}
