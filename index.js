
let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

//return the number of years since the driver's startDate
yearsExperienceFromBeginningOf(year){
  let endDate = new Date(year + 1, 1, 1);  //end date is set to jan 1st of the year passed in
  let totalYears = (endDate - this.startDate)/(365*24*60*60*1000); //to find the total time in years take the endDate calculated above, and subtract the startDate from it. This gives the number of milliseconds you then convert to years and return
  return parseInt(totalYears);
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  avenueToInteger(avenue){
    return eastWest.indexOf(avenue)
  }
  blocksTravelled(){
    let horizontalDistance = this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal)
    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical
    return (Math.abs(horizontalDistance) + Math.abs(verticalDistance))
  }
  estimatedTime(peak){
    if(peak){
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }
}
