class Driver {
  constructor(name, dateString){
    this.name = name
    this.startDate = new Date(dateString)
  }

  yearsExperienceFromBeginningOf(year) {
    const startYear = this.startDate.getFullYear()
    return year - startYear
  }
}

const eastWest = [
  '1st Avenue', '2nd Avenue',
  '3rd Avenue', 'Lexington Avenue',
  'Park', 'Madison Avenue', '5th Avenue'
]

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    return this.verticalTraveled() + this.horizontalTraveled()
  }

  verticalTraveled() {
    return Math.abs(
      this.beginningLocation.vertical -
      this.endingLocation.vertical
    )
  }

  horizontalTraveled() {
    return Math.abs(
      eastWest.indexOf(this.beginningLocation.horizontal) -
      eastWest.indexOf(this.endingLocation.horizontal)
    )
  }

  estimatedTime(peakHours) {
    if (peakHours) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
}
