class Driver {
  constructor(name, date) {
    this.name = name;
    this.startDate = new Date(date);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return Math.floor((new Date(endDate, 1, 1) - this.startDate) / 31536000000);
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    const startStreet = eastWest.indexOf(this.beginningLocation.horizontal),
          endStreet = eastWest.indexOf(this.endingLocation.horizontal),
          horizontalTravelled = Math.abs(startStreet - endStreet),
          verticalTravelled = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);

    return horizontalTravelled + verticalTravelled;
  }

  estimatedTime(boolean = false) {
    return boolean ? this.blocksTravelled() / 2 : this.blocksTravelled() / 3;
  }
}
