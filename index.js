class Driver {
  constructor(name, startDate){
  this.name = name
  this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year){
    return (new Date(year) - this.startDate)
  }
}




class Routes {
  constructor(beginningLocation, endingLocation){
  this.beginningLocation = beginningLocation
  this.endingLocation = endingLocation
  }

  blocksTravelled(){

  }

  estimatedTime(){

  }
}
