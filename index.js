class Driver{
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  };

  yearsExperienceFromBeginningOf(year){
    return year - (this.startDate.getFullYear() + 1)
  };
}

class Route{
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  };

  blocksTravelled(){
    const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    const vertical = parseInt(this.endingLocation.vertical, 10) - parseInt(this.beginningLocation.vertical, 10)
    const horizontal = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)
    return vertical + horizontal
  };

  estimatedTime(peak){
    if(peak){
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
  };
}
