let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }

    avenueNumber(avenue) {
        return eastWest.indexOf(avenue)
    }

    blocksTravelled() {
        let horizontalDistance = this.avenueNumber(this.endingLocation.horizontal) - this.avenueNumber(this.beginningLocation.horizontal)
        let verticalDistance = parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical)
        return Math.abs(horizontalDistance) + Math.abs(verticalDistance)
    }

    estimatedTime(peak) {
      if (peak){
          return (this.blocksTravelled()/ 2)
      } else {
          return (this.blocksTravelled()/ 3)
      }
    }
}