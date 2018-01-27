let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Driver {
  constructor(name, startDate){
    this.name = name;
    this.startDate = new Date(`${startDate}`);
  }

  yearsExperienceFromBeginningOf(year){
    let endDate = new Date(year, 1, 1)
    let totalYears = (endDate - this.startDate)/(365*24*60*60*1000) + 1
    return parseInt(totalYears)
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  avenueToInteger(avenue){
    return eastWest.indexOf(avenue)
  }

  blocksTravelled (){
    let eastWestTravel = Math.abs(this.avenueToInteger(this.beginningLocation.horizontal) - this.avenueToInteger(this.endingLocation.horizontal))
    let northSouthTravel = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    return eastWestTravel + northSouthTravel
      }
      
  estimatedTime(peak){
    if (peak){
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
  }}
  }

  

