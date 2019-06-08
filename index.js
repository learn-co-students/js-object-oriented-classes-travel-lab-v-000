class Driver {
  constructor(name, startDate){
  this.name = name
  this.startDate = new Date();
}
    yearsExperienceFromBeginningOf(year) {
      return year - this.startDate  
    }
    blocksTravelled() {
      return ''
    }
}


class Route {
  constructor(beginningLocation, endingLocation){
  this.beginningLocation = beginningLocation
  this.endingLocation = endingLocation
}

    blocksTravelled() {
      return ''
    }
    estimatedTime() {
      return ''
    }
}
