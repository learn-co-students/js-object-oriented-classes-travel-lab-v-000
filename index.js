class Driver {
    constructor(name, startDate) {
        this.name = name
        this.startDate = new Date(startDate)
    }

    yearsExperienceFromBeginningOf(year) {
        let endDate = new Date(year)
        let total = (endDate - this.startDate)/31536000000
        return Math.round(total)
    }
}

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation
        this.endingLocation = endingLocation
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

        let verticalBlocks = this.endingLocation.vertical - this.beginningLocation.vertical;
        let horizontalBlocks = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);

        return (verticalBlocks + horizontalBlocks);
    }

    estimatedTime(peak) {
        if (peak) {
            return this.blocksTravelled() / 2
        }
        else {
            return this.blocksTravelled() / 3
        }
    }
}