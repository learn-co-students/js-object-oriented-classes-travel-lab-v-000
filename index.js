class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let streetsTravelled = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical)

    let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
    ];

    let endPoint = eastWest.indexOf(this.endingLocation.horizontal) + 1
    let startPoint = eastWest.indexOf(this.beginningLocation.horizontal) + 1

    let avenuesTravelled = Math.abs(endPoint - startPoint)

    return streetsTravelled + avenuesTravelled
  }

  estimatedTime(argument) {
    if (argument === true) {
      return this.blocksTravelled() /2;
    }

    else if (argument === undefined) {
      return this.blocksTravelled() /3;
    }
  }
}
