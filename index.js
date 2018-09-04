
class Driver {
  constructor (name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  startDate(){
    return Date()
  }

// takes an argument of a year and returns the number of years since the driver's startDate.
  yearsExperienceFromBeginningOf(endDate){
    return new Date(endDate, 1, 1).getYear() - this.startDate.getYear() -1
 }
}

class Route {
  constructor (beginningLocation, endingLocation ){
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

 //indexOf() method returns the first index at which a given element can be found in the array
  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    return (this.endingLocation.vertical - this.beginningLocation.vertical) + (eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal))
  }

  estimatedTime(peak){
    if(peak){
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }
}
