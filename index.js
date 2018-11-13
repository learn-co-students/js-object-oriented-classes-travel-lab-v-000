//driver
//creating a new driver
//can create a Driver with a name and startDate ‣
//sets the driver startDate as a date object ‣
//yearsExperienceFromBeginningOf
//calculates the number of years driven given an endDate ‣
//
//Route
//blocksTravelled
//calculates the number of blocksTravelled ‣
//calculates the number of horizontal blocks travelled ‣
//combines horizontal and vertical blocks travelled ‣
//estimatedTime
//estimates time in minutes, with travel time of three //blocks in a minute ‣
//estimates time in minutes, with travel time of two blocks in a minute during peak hours

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
    this.startDate = new Date(startDate);
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
    let horizontalDistance =
      this.avenueToInteger(this.endingLocation.horizontal) -
      this.avenueToInteger(this.beginningLocation.horizontal);
    let verticalDistance =
      this.endingLocation.vertical - this.beginningLocation.vertical;
    return Math.abs(horizontalDistance) + Math.abs(verticalDistance);
  }
  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
