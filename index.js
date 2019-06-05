let eastWest= ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue', '6th Avenue', '7th Avenue','8th Avenue','9th Avenue','10th Avenue']


class Driver {
   constructor(name, startDate) {
     this.name = name
     this.startDate = new Date(startDate);
   }

   yearsExperienceFromBeginningOf(year){
     return year - this.startDate.getFullYear()
   }
}


class Route {
  constructor(beginningLocation,endingLocation){
      this.beginningLocation = beginningLocation
      this.endingLocation = endingLocation;
  }

  avenueToInteger(avenue){
    return eastWest.indexOf(avenue)
  }

  blocksTravelled() {
    let horizontalChange = this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal)
    let verticalChange = this.endingLocation.vertical - this.beginningLocation.vertical
    return (Math.abs(horizontalChange)) + (Math.abs(verticalChange))
  }

  estimatedTime(peak){
    if(peak) {
      return this.blocksTravelled()/2
    }
    else {
      return this.blocksTravelled()/3
    }
  }
}
