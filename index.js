
class Driver {
  constructor (name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
   yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}
 class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
   blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'MadisonAvenue', '5th Avenue'];
     let endHorizontal     = eastWest.indexOf(this.endingLocation.horizontal);
    let beginningHorizontal = eastWest.indexOf(this.beginningLocation.horizontal);
     let horizontalDist = Math.abs(endHorizontal - beginningHorizontal);
    let verticalDist   =  Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
     let totalDist = horizontalDist + verticalDist;
     return totalDist;
    }
     estimatedTime(peakHours) {
      let timeTravelled
       if (peakHours) {
        timeTravelled = this.blocksTravelled() / 2;
      } else {
        timeTravelled = this.blocksTravelled() / 3;
      }
       return timeTravelled;
    }
}