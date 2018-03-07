let avenues =  ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor(name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year1){
    let year2 = this.startDate.getFullYear()
    return year1 - year2
  }
}


class Route {
  constructor(locationStart, locationEnd){
    this.locationStart = locationStart
    this.locationEnd = locationEnd
  }
  avenueToInteger(avenue){
    return avenues.indexOf(avenue)
  }
  blocksHorizontalTravelled(){
    return this.avenueToInteger(this.locationEnd.horizontal) - this.avenueToInteger(this.locationStart.horizontal)
  }
  blocksVerticalTravelled(){
    return this.locationEnd.vertical - this.locationStart.vertical
  }
  blocksTravelled(){
    return this.blocksHorizontalTravelled() + this.blocksVerticalTravelled()
  }
  estimatedTime(peak){
    if(peak){
      return this.blocksTravelled()/2
    }
    else {
      return this.blocksTravelled()/3
    }
  }
}
