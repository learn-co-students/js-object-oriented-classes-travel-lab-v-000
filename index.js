class Driver {
    constructor(name, startDateString) {
        this.name = name;
        this.startDate = new Date(startDateString);
    }

    yearsExperienceFromBeginningOf(year) {
        return year - this.startDate.getFullYear();
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
    
        const verticalBlocks = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
        const horizontalLocationToInt = function(location) {
           return eastWest.indexOf(location)
        };
        const horizontalBlocks = Math.abs(horizontalLocationToInt(this.beginningLocation.horizontal) - horizontalLocationToInt(this.endingLocation.horizontal));

        return verticalBlocks + horizontalBlocks;
    }

    estimatedTime(peak) {
        if (peak === true) {
            return this.blocksTravelled() / 2;
        } else {
            return this.blocksTravelled() / 3;
        }
    }

}
