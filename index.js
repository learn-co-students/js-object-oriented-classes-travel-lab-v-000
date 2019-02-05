class Driver {
    constructor(name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate)
    }

    startDate() {
        return this.startDate;
    }

    yearsExperienceFromBeginningOf(year) {
        return new Date(year).getFullYear() - this.startDate.getFullYear() + 1;
    }
}

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }

    blocksTravelled() {
        let eastWest = [
            '1st Avenue',
            '2nd Avenue',
            '3rd Avenue',
            'Lexington Avenue',
            'Park',
            'Madison Avenue',
            '5th Avenue'
          ];

        let totalVertical = Math.abs(this.endingLocation.vertical  - this.beginningLocation.vertical);
        
        let totalHorizontal = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));

        return totalVertical + totalHorizontal;
    }

    estimatedTime(isDuringPeakHours) {
        if (!!isDuringPeakHours) {
            return this.blocksTravelled() / 2;
        } else {
            return this.blocksTravelled() / 3;
        }
    }
}