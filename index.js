const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
    constructor (name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    }
    yearsExperienceFromBeginningOf (year) {
        return (year - this.startDate.getFullYear());
    }
}

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }

    // Would be better to create a separate function to get index of eastWest avenue?

    blocksTravelled() {
        let startHorizontal = eastWest.indexOf(this.beginningLocation.horizontal);
        let endHorizontal = eastWest.indexOf(this.endingLocation.horizontal);
        return Math.abs(startHorizontal - endHorizontal) + Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    }
    estimatedTime(peakHours = false) {
        return peakHours ? this.blocksTravelled() / 2  : this.blocksTravelled() / 3 ;
    }
}