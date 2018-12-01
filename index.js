class Driver {
  constructor (name, date){
    this.name = name
    this.startDate = new Date(date);
  }

  yearsExperienceFromBeginningOf(endDate){
    return endDate - (this.startDate.getFullYear())
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    let startHor = eastWest.indexOf(this.beginningLocation.horizontal)
    let endHor = eastWest.indexOf(this.endingLocation.horizontal)

    let deltaHorizontal = Math.abs(startHor - endHor)
    let deltaVertical = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    let deltaTotal = deltaHorizontal + deltaVertical

    return deltaTotal
  }

  estimatedTime(peak = false){
    switch(peak){
      case true:
        return (this.blocksTravelled() / 2)
      case false:
        return (this.blocksTravelled() / 3)
    } //switch
  }
}
