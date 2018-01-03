class Driver {
  constructor(name, date) {
    this.name = name;
    this.startDate = new Date(date);
  }
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled() {
    const horizontalDistance = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
    const verticalDistance = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    return horizontalDistance + verticalDistance;
  }
  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    }
    else {
      return this.blocksTravelled() / 3;
    }
  }
}
