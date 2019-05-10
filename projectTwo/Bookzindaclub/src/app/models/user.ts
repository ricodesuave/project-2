export class User {
    constructor(
        public userId: number,
        public email: string,
        public password: string,
        public firstName: string,
        public lastName: string,
        public dateOfBirth: string
    ) {}
}
