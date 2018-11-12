class Driver {

  constructor (name, startDate) {
    let msec = Date.parse(startDate);

    this.name = name;
    this.startDate = new Date(msec);

  }

  yearsExperienceFromBeginningOf (endDate) {
    let startDateYear = this.startDate.getFullYear();
    return endDate - startDateYear;
  }

}

class Route {

  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled () {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue', '6th Avenue', 'Broadway', '7th Avenue']
    const verticalBlocks = this.endingLocation.vertical - this.beginningLocation.vertical;
    const horizontalBlocks = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);
    return verticalBlocks + horizontalBlocks;
  }

  estimatedTime(timeSetting) {
    const nonPeakTime = this.blocksTravelled() / 3;
    const peakTime = this.blocksTravelled() / 2;
    if (timeSetting === true) {
      return peakTime;
    }
    else {
      return nonPeakTime;
    }
  }

}
