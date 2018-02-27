class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf (year) {
    const startYear = this.startDate.getFullYear();
    if (year > startYear) {
      return year - startYear;
    } else {
      return "Driver not yet started working at Scuber."
    }
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled () {
    const manhattanAvenuesEastToWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue', '6th Avenue', '7th Avenue', '8th Avenue', '9th Avenue', '10th Avenue', '11th Avenue', '12th Avenue'];
    return Math.abs((manhattanAvenuesEastToWest.indexOf(this.beginningLocation.horizontal) + 1) - (manhattanAvenuesEastToWest.indexOf(this.endingLocation.horizontal) + 1)) + Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
  }

  estimatedTime (inPeakHours) {
    if (inPeakHours === true) {
      return this.blocksTravelled() / 2 ;
    } else {
      return this.blocksTravelled() / 3;
    }
  }
}
