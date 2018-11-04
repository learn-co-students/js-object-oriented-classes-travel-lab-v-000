let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate); // returns a JS Date object
  }
  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 1, 1);
    let totalYears = (endDate - this.startDate) / (365 * 24 * 60 * 60 * 1000);
    return parseInt(totalYears);
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  avenueToInteger(avenue) {
    return eastWest.indexOf(avenue);
  }
  blocksTravelled() {
    let horizontalDistance = this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal);

    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical

    return (Math.abs(horizontalDistance) + Math.abs(verticalDistance))
  }

  estimatedTime(peak) {
    if (peak) { // during peak hours, driver travels an estimated 2 blocks a minute
      return this.blocksTravelled() / 2;
    } else { // during off-peak hours, driver travels 3 blocks a minute
      return this.blocksTravelled() / 3;
    }
  }
}