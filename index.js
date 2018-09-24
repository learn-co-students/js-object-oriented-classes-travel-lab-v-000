class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  
  yearsExperienceFromBeginningOf(year) {
    return year - (this.startDate.getFullYear() + Math.round(this.startDate.getMonth()/12));
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']


class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  
  blocksTravelled() {
    let vert = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    
    let horiz = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
    
    return vert + horiz;
  }
  
  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() * (1/2)
    } else {
      return this.blocksTravelled() * (1/3)
    }
  }
}