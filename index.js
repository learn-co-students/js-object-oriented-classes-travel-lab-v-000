class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 1, 1)
    let totalYears = (endDate - this.startDate)/(365*24*60*60*1000)
    return parseInt(totalYears)
  }
}

// East to west
let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation) {
    // both of these have attributes of horizontal and vertical
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  aveToInt(avenue) {
    return eastWest.indexOf(avenue)
  }

  blocksTravelled() {
    let horizontal = this.aveToInt(this.beginningLocation.horizontal) - this.aveToInt(this.endingLocation.horizontal)
    let vertical = this.endingLocation.vertical - this.beginningLocation.vertical
    return (Math.abs(horizontal) + Math.abs(vertical))
  }

  estimatedTime(peak) {
    if(peak) {
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }
}
