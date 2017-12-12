class Driver {
    constructor(name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    };

    yearsExperienceFromBeginningOf(year){
        return (year - this.startDate.getFullYear() - 1);
    };
};

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    };
    blocksTravelled() {
        let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
        let horizontalEnd = eastWest.indexOf(this.endingLocation.horizontal);
        let horizontalBegin = eastWest.indexOf(this.beginningLocation.horizontal);
        const blocksEastWest = Math.abs(horizontalEnd - horizontalBegin);
        const blocksNorthSouth = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
        return blocksEastWest + blocksNorthSouth;
    };
    estimatedTime(peak) {
        const blocksPerMin = peak ? 2 : 3;
        return this.blocksTravelled() / blocksPerMin;
    };
};