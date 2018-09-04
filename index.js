
class Driver {
    constructor(name, startDate){
        this.name = name;
        this.startDate = new Date(startDate);
    }
    yearsExperienceFromBeginningOf(year){
        return year - (this.startDate.getFullYear() + 1)
    }
}

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }
    blocksTravelled(){
        let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
        const horizontal = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
        const vertical = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
        return horizontal + vertical;
    }

    estimatedTime(peak) {
        if(peak){
            return this.blocksTravelled() / 2;
        } else {
            return this.blocksTravelled() / 3;
        };
    }
}