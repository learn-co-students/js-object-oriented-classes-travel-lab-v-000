class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    let startYear = this.startDate.getFullYear()
    return year - startYear
  }
}



let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let horizontal = conversion(this.endingLocation.horizontal) - conversion(this.beginningLocation.horizontal)
    let vertical = this.endingLocation.vertical - this.beginningLocation.vertical
    return(Math.abs(horizontal) + Math.abs(vertical))

  }


  estimatedTime(peak) {
    if(peak) {
      console.log(this.blocksTravelled())
      return this.blocksTravelled() / 2

    } else {
      return this.blocksTravelled() / 3
    }
  }
}

function conversion(horizontal) {
  return eastWest.indexOf(horizontal)
}
