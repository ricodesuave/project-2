export class ClubMeeting {
    constructor(
        public clubMeetingIdentity: {
            clubId: number,
            dateTime: string
        },
        public location: string,
        public description: string
    ){}
}
