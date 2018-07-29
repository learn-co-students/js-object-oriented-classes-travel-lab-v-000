class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    const startDate = this.startDate;
    return ((year - startDate.getFullYear()) - 1)
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {

  constructor(start, end) {
    this.start = start
    this.end = end
  }

  blocksTravelled() {


    const verticalDistance = (this.end.vertical - this.start.vertical)
    const horizontalDistance = (eastWest.indexOf(this.end.horizontal) - eastWest.indexOf(this.start.horizontal))
    return verticalDistance + horizontalDistance;
  }

  estimatedTime(boolean) {
    if (boolean !== true) {
      return this.blocksTravelled() / 3
    }
    else {
      return this.blocksTravelled() / 2
    }
  }
}