 class Driver {
   constructor(name, startDate) {
     this.name = name;
     this.startDate = new Date(startDate);
   }
   yearsExperienceFromBeginningOf(year) {
     return year - this.startDate.getFullYear() - 1;
   }
 }

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    const horizontalBlocksTravelled = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));
    const verticalBlocksTravelled = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
    return horizontalBlocksTravelled + verticalBlocksTravelled;
  }
  estimatedTime(isPeakhour) {
    return isPeakhour ? this.blocksTravelled()/2 : this.blocksTravelled()/3;
  }
}
