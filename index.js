class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear()
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  avenueToInteger(avenue) {
    return eastWest.indexOf(avenue)
  }
  blocksTravelled() {
    let horiDistance = this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal)
    let vertDistance = this.endingLocation.vertical - this.beginningLocation.vertical
    return (Math.abs(horiDistance) + Math.abs(vertDistance))
  }
  estimatedTime(peak) {
    if (peak === true) {
      return this.blocksTravelled()/2;
    } else {
      return this.blocksTravelled()/3;
    }
  };
}
