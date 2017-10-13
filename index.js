let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year){
    const yearsExp = year - 1 - this.startDate.getFullYear()
    return yearsExp
  }
}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  avenueToNum(avenue){
    return eastWest.indexOf(avenue)
  }

  blocksTravelled(){
    let verticalTravel = this.endingLocation.vertical - this.beginningLocation.vertical
    let horizontalTravel = this.avenueToNum(this.endingLocation.horizontal) - this.avenueToNum(this.beginningLocation.horizontal)
    return Math.abs(verticalTravel) + Math.abs(horizontalTravel)
  }  

  estimatedTime(peakTime){
    const blocks = this.blocksTravelled()
    
    if (peakTime){
      return blocks / 2
    } else{
      return blocks / 3
    }
  }
}