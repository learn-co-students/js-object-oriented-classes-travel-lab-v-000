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
  constructor(beginingLocation, endingLocation) {
    this.beginingLocation = beginingLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];


    const vertChange = this.endingLocation.vertical - this.beginingLocation.vertical;

    const horizontalChange = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginingLocation.horizontal);
    return horizontalChange + vertChange;
  }

  estimatedTime(peakTime = false) {
    if (peakTime === false) {
      return this.blocksTravelled()/3;
    }
    else {
      return this.blocksTravelled() / 2;
    }
  }

}
