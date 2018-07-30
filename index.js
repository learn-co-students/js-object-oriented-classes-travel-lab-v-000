class Driver {
  constructor(name, startDate) {
   this.name = name
   this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - `${this.startDate.getFullYear()}` - 1
  }

}

class Location {
  constructor(horizontal, vertical) {
    this.horizontal = horizontal
    this.vertical = vertical

  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];


class Route extends Location {
  constructor(beginningLocation, endLocation) {
    super()
    this.beginningLocation = beginningLocation
    this.endLocation = endLocation
  }


  blocksTravelled() {
    if (this.beginningLocation.horizontal === this.endLocation.horizontal) {
      return this.endLocation.vertical - this.beginningLocation.vertical
    } else {
      return (eastWest.indexOf(this.endLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)) +  (this.endLocation.vertical - this.beginningLocation.vertical)
    }
  }

  estimatedTime() {

    if (this.blocksTravelled() % 2 === 0) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }

}
