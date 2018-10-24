class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date (startDate)
  }

  yearsExperienceFromBeginningOf(endDate) {
    let startYear = this.startDate.getFullYear()
    return endDate - startYear
  }

}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let verticalTravel = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)

    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let startIndex = eastWest.indexOf(this.beginningLocation.horizontal)
    let endIndex = eastWest.indexOf(this.endingLocation.horizontal)

    let horizontalTravel = Math.abs(endIndex - startIndex)
    return (verticalTravel + horizontalTravel)
  }

  estimatedTime(peak) {
    if (peak === true)
      return ( this.blocksTravelled() / 2 )
    else
      return ( this.blocksTravelled() / 3 )
    end
  }
}
