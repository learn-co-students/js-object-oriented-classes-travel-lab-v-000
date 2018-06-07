
class Driver {
  
  constructor(name, startDate) {
    this.name = name 
    this.startDate = new Date(startDate)
  }

  

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    // debugger;
    
    let hStart = eastWest.indexOf(this.beginningLocation.horizontal) + 1

    let hEnd = eastWest.indexOf(this.endingLocation.horizontal) + 1

    let hTotal = Math.abs(hStart - hEnd)

    return (Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical) + hTotal)
  }

  estimatedTime(peakhours) {
    if (peakhours) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }

}