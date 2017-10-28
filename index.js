class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 1, 1)
    let totalYears = (endDate - this.startDate)/(365*24*60*60*1000)
    return parseInt(totalYears)
  }
}

// East to west
let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
/
class Route {
  constructor(beginningLocation, endingLocation) {
    // both of these have attributes of horizontal and vertical
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  // returns an integer with the number of blocks travelled
  //blocksTravelled(){}
  // streets we can subtract, ie: 15th - 10th
}
