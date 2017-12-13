const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }

  // soln doesn't work.
  // yearsExperienceFromBeginningOf(year){
  //   let endDate = new Date(year, 1, 1);
  //   let totalYears = (endDate - this.startDate)/(365*24*60*60*1000);
  //   return parseInt(totalYears);
  // }
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
    const startingEastWest = this.avenueToInteger(this.beginningLocation.horizontal);
    const endingEastWest = this.avenueToInteger(this.endingLocation.horizontal);
    const horizontalBlocksTravelled = Math.abs( startingEastWest - endingEastWest );
    const verticalBlocksTravelled = Math.abs( this.beginningLocation.vertical - this.endingLocation.vertical);
    return horizontalBlocksTravelled + verticalBlocksTravelled;
  }

  estimatedTime(peak) {
    if (peak) {
      return Math.floor(this.blocksTravelled() / 2);
    } else {
      return Math.floor(this.blocksTravelled() / 3);
    }
  }

}
