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

  yearsExperienceFromBeginningOf (year) {
    let startYear = this.startDate.getFullYear();
    let yearsExperience = parseInt(year) - startYear;
    return yearsExperience;
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let verticalDistance = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
    let horizontalDistance = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));
    return (verticalDistance + horizontalDistance);
  }

  estimatedTime(peakTime) {
    if (peakTime) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
}

}
