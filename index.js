class Driver {
    constructor(name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    }

    yearsExperienceFromBeginningOf(year) {
        //let endYear = (new Date(year, 0)).getFullYear();
        //let newYear = endYear.getFullYear();
        //let startYear = this.startDate.getFullYear();
        return year - this.startDate.getFullYear();
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
        let verticalBlocks = this.beginningLocation.vertical - this.endingLocation.vertical;
        let horizontalBlocks = eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal);
        return -(verticalBlocks + horizontalBlocks);
    }

    estimatedTime(peakHours) {
        if(peakHours) {
          return this.blocksTravelled()/2;
        } else {
          return this.blocksTravelled()/3;
        };
    }
}
