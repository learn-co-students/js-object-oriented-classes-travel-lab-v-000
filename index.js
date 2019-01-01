class Driver {

  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    const startYear = this.startDate.getFullYear();
    return year - startYear;
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

  convertHorizontal(address) {
    return eastWest.indexOf(address);
  }

  blocksTravelled() {
    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical;
    let horizontalDistance = this.convertHorizontal(this.endingLocation.horizontal) - this.convertHorizontal(this.beginningLocation.horizontal);
    return Math.abs(verticalDistance) + Math.abs(horizontalDistance);
  }

  estimatedTime(timePeriod) {
    if (timePeriod) {
      return this.blocksTravelled() / 2;
    }
    else {
      return this.blocksTravelled() / 3;
    }
  }

}
