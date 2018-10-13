class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let startHorizontal = 0
    let endHorizontal = 0
    let startName = this.beginningLocation.horizontal
    let endName = this.endingLocation.horizontal
    eastWest.forEach(function(street, index) {
      if (startName === street && endName === street) {
        startHorizontal = index;
        endHorizontal = index;
        console.log(startHorizontal)
        console.log(endHorizontal)
      }
      else if (endName === street) {
        endHorizontal = index
        console.log(endHorizontal)
      }
      else if (startName === street) {
        startHorizontal = index
        console.log(startHorizontal)
      }
    })
    console.log( (endHorizontal - startHorizontal) + (this.endingLocation.vertical - this.beginningLocation.vertical))
    return (endHorizontal - startHorizontal) + (this.endingLocation.vertical - this.beginningLocation.vertical)
  }

  estimatedTime(peak) {
    let totalBlocks = this.blocksTravelled();
    return (peak ? totalBlocks / 2 : totalBlocks / 3);
  }
}
