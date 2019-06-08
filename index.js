let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver {
  constructor(name, startDate){
  this.name = name
  this.startDate = new Date(startDate);
}
    yearsExperienceFromBeginningOf(year) {
      let end = new Date(year, 0, 1)
      return end.getFullYear() - this.startDate.getFullYear()
    }
}


class Route {
  constructor(beginningLocation, endingLocation){
  this.beginningLocation = beginningLocation
  this.endingLocation = endingLocation
}
    avenueToInteger(avenue) {
     return eastWest.indexOf(avenue)
    }

    blocksTravelled() {
      let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical
      let horizontalDistance = this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal)
      return Math.abs(horizontalDistance) + Math.abs(verticalDistance)
    }

    estimatedTime(peak) {
          let offHours = this.blocksTravelled() / 3
          let peakHours = this.blocksTravelled() / 2
          if (peak) {
            return peakHours
          } else {
            return offHours
          }
        }
}
