
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

// const callback = function (el, i) {
//   if (el === street) {
//     return i + 1
//   }
// }

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
  constructor(obj1, obj2) {
    this.horizontal1 = obj1.horizontal
    this.vertical1 = obj1.vertical
    this.horizontal2 = obj2.horizontal
    this.vertical2 = obj2.vertical
  }
  blocksTravelled() {
    let vertical = this.vertical2 - this.vertical1
    let horizontal = horizontalcalc(eastWest, this.horizontal2) - horizontalcalc(eastWest, this.horizontal1)
    return horizontal + vertical
  }
}
