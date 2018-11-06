class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 0, 1);
    let totalYears = (endDate - this.startDate) / 31536000000;
    return parseInt(totalYears);
  }
}
let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']


class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  avenueToNumber(avenue) {
    return eastWest.indexOf(avenue);
  }
  blocksTravelled() {
    let horizontalDistance =
      this.avenueToNumber(this.endingLocation.horizontal) -
      this.avenueToNumber(this.beginningLocation.horizontal);
    let verticalDistance =
      this.endingLocation.vertical - this.beginningLocation.vertical;
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
