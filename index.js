class Driver {
  constructor (name, startDate){
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    const endDate = new Date(year)
    return endDate.getUTCFullYear() - this.startDate.getUTCFullYear()
  }
}




class Route {
  constructor (beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
    blocksTravelled() {
      let eastWest = ['1st Avenue','2nd Avenue','3rd Avenue','Lexington Avenue','Park','Madison Avenue','5th Avenue'];
      const vert = this.endingLocation.vertical - this.beginningLocation.vertical
      const hrzt =  eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)
      return vert + hrzt
    }

    estimatedTime(peak) {
      return peak ? this.blocksTravelled() / 2 :  this.blocksTravelled() / 3
    }
}
