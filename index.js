class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
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
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue',
    'Park', 'Madison Avenue', '5th Avenue']

    const verticalDistance = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    const horizontalDistance = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));

    return verticalDistance + horizontalDistance;
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled(this.beginningLocation, this.endingLocation) / 2;
    }
    else {
      return this.blocksTravelled(this.beginningLocation, this.endingLocation) / 3;
    }
  }
}
