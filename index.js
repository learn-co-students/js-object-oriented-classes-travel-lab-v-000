class Driver {
    constructor(name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    }

    yearsExperienceFromBeginningOf(date) {
        return Math.round((new Date(date) - this.startDate) / 31536000000);
    }
}

let eastWest = [
    '1st Avenue',
    '2nd Avenue',
    '3rd Avenue',
    'Lexington Avenue',
    'Park',
    'Madison Avenue',
    '5th Avenue'
  ];

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }

    blocksTravelled() {
        let horizontal = eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal);
        let vertical = this.beginningLocation.vertical - this.endingLocation.vertical;
        return -1 * (horizontal + vertical);
    }

    estimatedTime(peak) {
        let blocks = this.blocksTravelled();
        if (peak === true) {
            return (blocks / 2) * 1;
        }
        else {
            return (blocks / 3) * 1;
        }
    }
}