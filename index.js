class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  };


  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  };
}

// Route Class

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {

  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  convertAvenue(avenueName) {
    return eastWest.indexOf(avenueName);
  }

  blocksTravelled() {
    //debugger;
    let verticalTravelled = this.endingLocation.vertical - this.beginningLocation.vertical;
    let horizontalTravelled = this.convertAvenue(this.endingLocation.horizontal) - this.convertAvenue(this.beginningLocation.horizontal);
    let totalTravel = horizontalTravelled + verticalTravelled;

    return totalTravel;
  }

  estimatedTime(peakHours) {
    if (peakHours) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }

}
