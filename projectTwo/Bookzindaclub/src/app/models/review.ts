export class Review {
    constructor(
        public userId: number,
        public bookId: number,
        public reviewDescription: string,
        public rating: number,
        public reviewDate: string
    ) {}
}
