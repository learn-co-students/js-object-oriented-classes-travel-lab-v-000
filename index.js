let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
    // returns ex) Wed Aug 09 1995 00:00:00 GMT+0900 (KST)
  };

  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 0, 1)

    return Math.round((endDate - this.startDate) / (365 * 24 * 60 * 60 * 1000));
    //divide the milleseconds by # of milleseconds in a year
  };
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
    // have vertical/horizontal attributes
  };

  avenueToInteger(avenue) {
    return eastWest.indexOf(avenue)
  }
  //convert the avenues to index numbers to calculate # of blocks travelled

  blocksTravelled() {
    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical;
    let horizontalDistance = this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal);

    return Math.abs(verticalDistance) + Math.abs(horizontalDistance);
  };

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  };
}
