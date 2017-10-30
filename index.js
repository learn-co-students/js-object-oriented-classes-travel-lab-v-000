const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    const endDate = new Date(year, 1);
    return Math.round((endDate - this.startDate)/(365*24*60*60*1000));
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    const horizontalDist = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)
    const verticalDist = this.endingLocation.vertical - this.beginningLocation.vertical
    return (Math.abs(horizontalDist) + Math.abs(verticalDist))
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }
}