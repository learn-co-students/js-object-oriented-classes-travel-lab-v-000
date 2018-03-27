class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }
}

Driver.prototype.yearsExperienceFromBeginningOf = function(year){
  return year - this.startDate.getFullYear();
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
}

Route.prototype.blocksTravelled = function(beginningLocation, endingLocation){
  let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

  function distanceAsIndex(avenue){
    return eastWest.indexOf(avenue)
  }

  const horizontalDistance = distanceAsIndex(this.beginningLocation.horizontal) - distanceAsIndex(this.endingLocation.horizontal)
  const verticalDistance = this.beginningLocation.vertical - this.endingLocation.vertical

  return Math.abs(totalDistance = horizontalDistance + verticalDistance);
}

Route.prototype.estimatedTime = function(peak){
  if (peak) {
    return this.blocksTravelled() / 2
  }
  else {
    return this.blocksTravelled() / 3
  }
}
