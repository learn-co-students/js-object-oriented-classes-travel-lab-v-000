class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

const avenueToIndex = function(avenue) {
  return eastWest.findIndex(function(el) {return el === avenue})
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled() {
    const verticalDistance = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
    const horizontalDistance = Math.abs(avenueToIndex(this.beginningLocation.horizontal) - avenueToIndex(this.endingLocation.horizontal));
    return verticalDistance + horizontalDistance;
  }
    estimatedTime(peakHours = false) {
      if (peakHours === true) {
        return this.blocksTravelled() / 2
      } else {
        return this.blocksTravelled() / 3
      }
    }
}
