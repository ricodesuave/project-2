export class ReviewTransfer {
    constructor(
        public title: string,
        public author: string,
        public firstName: string,
        public lastName: string,
        public reviewDescription: string,
        public rating: number,
        public reviewDate: string
    ) {}
}
