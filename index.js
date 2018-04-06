
let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear()
  }
}

class Route {
  constructor(block1, block2) {
    this.block1 = block1
    this.block2 = block2
  }

  blocksTravelled() {
    return((eastWest.indexOf(this.block2.horizontal) - eastWest.indexOf(this.block1.horizontal)) + (this.block2.vertical - this.block1.vertical))
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
}
