
class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)

  }

  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear()
  }
}

// let route = new Route({horizontal: 'Park', vertical: '34'}, {horizontal: 'Park', vertical: '45'})
// route.blocksTravelled()
class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let horizontal = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
    let vertical = Math.abs(parseInt(this.beginningLocation.vertical) - parseInt(this.endingLocation.vertical))
    return horizontal + vertical
  }

  estimatedTime(peak){
    if (peak === true) {
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }

}
