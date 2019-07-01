class Driver {
  constructor (name, dayJoined) {
    this.name = name;
    this.dayJoined = dayJoined;
    this.startDate = new Date(this.dayJoined);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled () {
    let eastWest = [
        '1st Avenue',
        '2nd Avenue',
        '3rd Avenue',
        'Lexington Avenue',
        'Park',
        'Madison Avenue',
        '5th Avenue'
      ];
    return (eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)) + (this.endingLocation.vertical - this.beginningLocation.vertical)
  }

  estimatedTime (peakHours) {
    if (peakHours) {
      return this.blocksTravelled() / 2
    }
    else {
      return this.blocksTravelled() / 3
    }
  }
}
