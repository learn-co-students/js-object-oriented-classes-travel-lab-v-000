
class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date( startDate )
  }
  
  yearsExperienceFromBeginningOf (endDate) {
    return endDate - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
  this.beginningLocation = beginningLocation
  this.endingLocation = endingLocation
    }
  
  blocksTravelled () {
  let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
  ]
  
  const vert = this.endingLocation.vertical - this.beginningLocation.vertical
    const horiz_end = eastWest.indexOf(this.endingLocation.horizontal)
    const horiz_start = eastWest.indexOf(this.beginningLocation.horizontal)
    const horiz = horiz_end - horiz_start;

     return vert + horiz;
  }
  
  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }
    
  }

}
