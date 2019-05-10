import { User } from './user';

export class Club {
    constructor(
        public clubId: number,
        public clubName: string,
        public clubDescription: string,
        public owner: User
    ){}
}
