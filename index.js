class Driver {

  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return Number.parseInt(year) - this.startDate.getFullYear();
  }

}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  static get eastWest() {
    return ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
  }

  blocksTravelled() {
    const horizontalDistanceCallback = function (location) {
      return location === this.horizontal;
    }
    const verticalDistanceTravelled = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    const horizontalDistanceTravelled = Math.abs(Route.eastWest.findIndex(horizontalDistanceCallback, this.beginningLocation) - Route.eastWest.findIndex(horizontalDistanceCallback, this.endingLocation));
    return verticalDistanceTravelled + horizontalDistanceTravelled;
  }

  estimatedTime(rushHour) {
    if (!!rushHour) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}