import { Person } from './person.model';


export class Opinions {
    requester: Array<Person>;
    requested: Array<Person>;
    accepted: boolean;
}
