class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endDate){
    return new Date(endDate, 1, 1).getYear() - this.startDate.getYear() -1
  }

}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(startLocation, endLocation){
    this.startLocation = startLocation;
    this.endLocation = endLocation;
  }

  blocksTravelled(){
  let horizontal = eastWest.indexOf(this.endLocation["horizontal"]) - eastWest.indexOf(this.startLocation["horizontal"])
  let vertical = this.endLocation["vertical"] - this.startLocation["vertical"]

  return horizontal + vertical
  }

  estimatedTime(peak){
  if (peak){
    return  Math.round(this.blocksTravelled() / 2)
  }
    return Math.round(this.blocksTravelled() / 3)

  }
}
// During off peak hours, a driver travels three blocks in a minute,
// while during peak hours a driver travels an estimated two blocks in a minute.
