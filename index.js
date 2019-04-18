class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    const time = new Date(year);
    let elapsedTime =  (time - this.startDate) / ( 365 * 24 * 60 * 60 * 1000 );
    return parseInt(elapsedTime);
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
    let horizontalDistance = 0;
    let verticalDistance = 0;

    if (this.beginningLocation.vertical > this.endingLocation.vertical) {
      verticalDistance = this.beginningLocation.vertical - this.endingLocation.vertical;
    } else {
      verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical;
    }

    if (eastWest.indexOf(this.beginningLocation.horizontal) > eastWest.indexOf(this.endingLocation.horizontal)) {
      horizontalDistance = eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal);
    } else {
      horizontalDistance = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);
    }

    return horizontalDistance + verticalDistance;
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }


}
