class Driver {
  constructor (name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate){
    return endDate - 1 - this.startDate.getFullYear()
  }

}

class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = [
      '1st Avenue', '2nd Avenue', '3rd Avenue',
    'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'
  ]

  let startVertical = this.beginningLocation.vertical
  let endVertical = this.endingLocation.vertical
  let verticalDistance = (startVertical > endVertical) ? startVertical - endVertical : endVertical - startVertical
  let begHorizontal = this.beginningLocation.horizontal
  let finHorizontal = this.endingLocation.horizontal
  let startHorizontal = eastWest.findIndex(function(avenue) {
    return avenue === begHorizontal
  })
  let endHorizontal = eastWest.findIndex(function(avenue) {
    return avenue === finHorizontal
  })
  let horizontalDistance = (startHorizontal > endHorizontal) ? startHorizontal - endHorizontal : endHorizontal - startHorizontal
  return horizontalDistance + verticalDistance
  }

  estimatedTime (peak) {
    let blocksTravelled = this.blocksTravelled()
    return (peak) ? Math.round(blocksTravelled/2) : Math.round(blocksTravelled/3)
  }
}
