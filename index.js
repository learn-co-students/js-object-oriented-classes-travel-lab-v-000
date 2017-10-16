let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate){
    this.name =  name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    let newYear = new Date(year, 1, 1)
    let diff = (newYear - this.startDate)/(1000*60*60*24*365)
    return parseInt(diff)
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled() {
    let begVertInt = this.beginningLocation['vertical'] * 1
    let endVertInt = this.endingLocation['vertical'] * 1
    let verticalTotal = endVertInt - begVertInt;
    let total = 0
    let begHoriz = this.beginningLocation['horizontal']
    let indexBegHoriz = eastWest.indexOf(begHoriz)
    let endHoriz = this.endingLocation['horizontal']
    let indexEndHoriz = eastWest.indexOf(endHoriz)
    let horizTotal = indexEndHoriz - indexBegHoriz;
    return total += horizTotal + verticalTotal
  }

  estimatedTime(peak){
    if(peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  }
}
