  let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
  constructor (name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(year) {
    let x = new Date(year, 0)
    let y = x - this.startDate
    return Math.ceil(y / 86400000 / 365)
  }
}

class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }
  

   
   blocksTravelled() {
     let x = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
     let y = Math.abs((eastWest.findIndex(ave => ave === this.beginningLocation.horizontal) - eastWest.findIndex(ave => ave === this.endingLocation.horizontal)))
     return x + y
   }
   
   estimatedTime(peak) {
     if (peak) {
       return this.blocksTravelled() / 2 
     } else {
       return this.blocksTravelled() / 3
     }
   }
}