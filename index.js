class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
   yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
 }
 class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
   blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
     let eastWestStart = eastWest.indexOf(this.beginningLocation.horizontal);
    let eastWestEnd = eastWest.indexOf(this.endingLocation.horizontal);
    let eastWestBlocks = Math.abs(eastWestStart - eastWestEnd);
     let northSouthStart = this.beginningLocation.vertical
    let northSouthEnd = this.endingLocation.vertical
    let northSouthBlocks = Math.abs(northSouthStart - northSouthEnd);
     return eastWestBlocks + northSouthBlocks;
  }
   estimatedTime(isPeakHours = false) {
    if (isPeakHours) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
