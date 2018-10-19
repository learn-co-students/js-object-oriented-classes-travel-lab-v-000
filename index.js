
let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']


class Driver {
    constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
    }
    
    yearsExperienceFromBeginningOf(year) {
        const currentDate = new Date(year, 1, 1);
        const totalYears = (currentDate - this.startDate) / (365 * 24 * 60 * 60 * 1000);
        return parseInt(totalYears);
    }
}

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }

    avenueToInteger(avenue) {
        return eastWest.indexOf(avenue)
    }

    blocksTravelled() {
        let horDist = this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal);
        let verDist = this.endingLocation.vertical - this.beginningLocation.vertical;  
        return Math.abs(horDist) + Math.abs(verDist); 
    }

    estimatedTime(peak) {
        if (peak) {
            return this.blocksTravelled() / 2
        } else {
            return this.blocksTravelled() / 3
        } 
    }
}
