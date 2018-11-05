class Driver {
    constructor(name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    }

    yearsExperienceFromBeginningOf (endYear) {
        let startYear = this.startDate.getFullYear();
        return endYear - startYear;
    }

}

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }

    blocksTravelled () {
        let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
        let h = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
        let v = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
        let blocks = h + v;
        return blocks
    }

    estimatedTime(arg) {
        if (arg == true) {
          let blocks =  this.blocksTravelled();
          let time = Math.ceil(blocks / 2);
          return time;
        } else {
          let blocks =  this.blocksTravelled();
          let time = Math.ceil(blocks / 3);
          return time;
        }
    }
}