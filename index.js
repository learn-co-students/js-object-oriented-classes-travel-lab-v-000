class Driver {
  constructor(name, dateString) {
    this.name = name
    this.startDate = new Date(dateString)
  }

  yearsExperienceFromBeginningOf(year) {
    const yearsSince = new Date(year);
    return yearsSince.getUTCFullYear() - this.startDate.getUTCFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    const ewBlockStart = this.beginningLocation.horizontal;
    const ewBlockEnd = this.endingLocation.horizontal;
    let blocks = Math.abs(eastWest.findIndex(street => street === ewBlockStart) - eastWest.findIndex(street => street === ewBlockEnd));
    blocks += Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    return blocks
  }

  estimatedTime(peak) {
    if (peak == true) {
      return this.blocksTravelled()/2;
    } else {
      return this.blocksTravelled()/3;
    }
  }
}
