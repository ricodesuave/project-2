export class Apibooks {
    constructor(
    public item: VolumeInfo[]
    ) {}
}

class VolumeInfo{
    constructor(
        public title: string,
        public author: string[]
    ) {}
}
