export class ClubMember {
    constructor(
        public clubMemberIdentity: {
            clubId: number,
            userId: number,
        },
        public joinDate: string
    ){}
}
