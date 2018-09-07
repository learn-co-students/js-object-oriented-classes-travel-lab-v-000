class Driver {
  constructor(name,startDate) {
    this.name = name;
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year) {

    return year - this.startDate.getFullYear() - 1
  }
}

class Route {
  constructor(beginningLocation,endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation
  }
  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let vert = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
    let horizontal = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal))
    return vert + horizontal
  }

  estimatedTime(peak) {
    let min;
    if (peak === true) {
       min = this.blocksTravelled()/2
    } else {
       min = this.blocksTravelled()/3
    }
    return min
  }
}
