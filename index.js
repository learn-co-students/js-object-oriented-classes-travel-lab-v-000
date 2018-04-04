let eastWest =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']


class Driver {
  constructor(name, dateString){
    this.name = name;
    this.startDate = new Date(dateString);
  }
  yearsExperienceFromBeginningOf(year){
    return year - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation,endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  //get the index of the avenue separately as an integer to do le subtraction
  avenueToInteger(avenue){
   return eastWest.indexOf(avenue)
  }

  blocksTravelled(){
   const horizontalDistance = this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal)
   const verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical
   return (Math.abs(horizontalDistance) + Math.abs(verticalDistance))
  }

  estimatedTime(){
    
  }
}
