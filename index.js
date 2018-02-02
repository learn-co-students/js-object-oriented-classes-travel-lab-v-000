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
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let horizontalDistance = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
    let verticalDistance = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    let distance = horizontalDistance + verticalDistance;
    return distance;
  }

  estimatedTime(peak) {
    if (peak === true) {
      return Math.floor(this.blocksTravelled() / 2);
    } else {
      return Math.floor(this.blocksTravelled() / 3);
    }
  }
  
}
