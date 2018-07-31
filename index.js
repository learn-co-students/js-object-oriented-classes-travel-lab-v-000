class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate) {
    return (endDate - this.startDate.getFullYear() -1)
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
    }


  blocksTravelled(beginningLocation, endingLocation) {
    const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    const horDist = Math.abs( this.beginningLocation.vertical - this.endingLocation.vertical )
    const vertDist = Math.abs( eastWest.indexOf(this.beginningLocation.horizontal ) - eastWest.indexOf(this.endingLocation.horizontal) )
    return horDist + vertDist
  }

  estimatedTime(rushHour) {
    if (rushHour) {
      return this.blocksTravelled(this.beginningLocation, this.endingLocation)/2
    } else {
      return this.blocksTravelled(this.beginningLocation, this.endingLocation)/3
    }
  }



}
