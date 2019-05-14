export class Review {
    constructor(
        public reviewIdentity: ReviewIdentity,
        public reviewDescription: string,
        public rating: number,
        public reviewDate: string
    ) {}
}
class ReviewIdentity {
    public userId: number;
    public bookId: number;
}
