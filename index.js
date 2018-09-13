
class Driver {
  constructor(name, date) {
    this.name = name
    this.startDate = new Date(date)
  }
  yearsExperienceFromBeginningOf(endDate) {
    return (endDate - this.startDate.getFullYear()) - 1
  }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

function horizontalcalc(array, street) {
  let i = 0
  for (const element of array) {
    if (element === street) {
      return i + 1
    }
    i++
  }
}

class Route {
  constructor(beginning, ending) {
    this.beginning = beginning
    this.ending = ending
  }
  blocksTravelled() {
    let vertical = this.ending.vertical - this.beginning.vertical
    let horizontal = horizontalcalc(eastWest, this.ending.horizontal) - horizontalcalc(eastWest, this.beginning.horizontal)
    return horizontal + vertical
  }
  estimatedTime(condition = false) {
    let traveltime = this.blocksTravelled()
    if (condition === false) {
      return traveltime / 3
    } else {
    return traveltime / 2
    }
  }
}
