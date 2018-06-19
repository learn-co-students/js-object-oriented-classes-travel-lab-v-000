const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return Math.ceil(((new Date(year, 0, 1)) - this.startDate) / (1000*60*60*24*365.2422))
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    const verticalTravel = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
    const horizontalTravel = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));

    return verticalTravel + horizontalTravel;
  }

  estimatedTime(peak = false) {
    return peak ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3;
  }
}
