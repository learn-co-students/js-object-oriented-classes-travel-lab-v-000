class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return parseInt(endDate) - this.startDate.getFullYear();
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
    let verticalTotal = Math.abs(parseInt(this.beginningLocation.vertical) - parseInt(this.endingLocation.vertical))

    if (this.beginningLocation.horizontal === this.endingLocation.horizontal) {
      return verticalTotal;
    } else {
        let horizontalTotal = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
        return (horizontalTotal + verticalTotal);
    }
  }

  estimatedTime(peak) {
    if (peak === true) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
