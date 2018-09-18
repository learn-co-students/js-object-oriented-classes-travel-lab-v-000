class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear() - 1;
  }
}

class Route {
  constructor(beginningLocation, endLocation) {
    this.beginningLocation = beginningLocation;
    this.endLocation = endLocation;
  }

  /*
    input: 
        beginningLocation.horizontal,
        beginningLocation.vertical,
        endLocation.horizontal,
        endLocation.vertical
    
    output:
        endLocation.horizontal - beginningLocation.horizontal
        +
        endLocation.vertical - beginningLocation.vertical

  */
  blocksTravelled() {
    let eastWest = [
      "1st Avenue",
      "2nd Avenue",
      "3rd Avenue",
      "Lexington Avenue",
      "Park",
      "Madison Avenue",
      "5th Avenue"
    ];

    let horizontalDistance = Math.abs(
      eastWest.indexOf(this.endLocation["horizontal"]) -
        eastWest.indexOf(this.beginningLocation["horizontal"])
    );

    let verticalDistance = Math.abs(
      this.endLocation["vertical"] - this.beginningLocation["vertical"]
    );

    return horizontalDistance + verticalDistance;
  }

  estimatedTime(isPeak) {
    if (isPeak) {
      return this.blocksTravelled() / 2;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
