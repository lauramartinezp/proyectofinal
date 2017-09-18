import { Person } from './person.model';


export class Relate {
    id: number;
    requester: Person;
    requested: Person;
    accepted: boolean;
}
