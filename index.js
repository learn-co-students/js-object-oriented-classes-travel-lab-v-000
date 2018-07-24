class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year){
     let endDate = new Date(year, 1, 1)
     let totalYears = (endDate - this.startDate)/(365*24*60*60*1000)
     return parseInt(totalYears)
   }
 }
}//Driver

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    const bLH = this.beginningLocation.horizontal
    const eLH = this.endingLocation.horizontal
    const bLV = this.beginningLocation.vertical
    const eLV = this.endingLocation.vertical

    function findBLIndex(element) {
      return element === bLH
    }

    function findELIndex(element) {
      return element === eLH
    }

    const horizontalDistance = eastWest.findIndex(findELIndex) - eastWest.findIndex(findBLIndex)

    const verticalDistance = eLV - bLV

    return horizontalDistance + verticalDistance
  }

  estimatedTime(peak) {
    if(peak){
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }

  }//estimatedTime


}//Route
