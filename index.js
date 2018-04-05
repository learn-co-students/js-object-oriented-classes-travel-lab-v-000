class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  
  yearsExperienceFromBeginningOf(endDate) {
    return endDate - this.startDate.getFullYear();
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  
  // var x = -25;
  // x = Math.abs(x); // x would now be 25 
  // let route = new Route({horizontal: 'Park', vertical: '34'}, {horizontal: 'Park', vertical: '45'})
  // expect(route.blocksTravelled()).to.equal(11)
  
  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    
    let startAve = this.beginningLocation.horizontal 
    let startStreet = parseInt(this.beginningLocation.vertical, 10)
    
    let endAve =  this.endingLocation.horizontal
    let endStreet = parseInt(this.endingLocation.vertical, 10)
    
    let horizontalBlocksTravelled = Math.abs(eastWest.indexOf(startAve) - eastWest.indexOf(endAve)) 
    let verticalBlocksTravelled = Math.abs(startStreet - endStreet)
    
    let totalBlocksTravelled = horizontalBlocksTravelled + verticalBlocksTravelled
    return totalBlocksTravelled
  }
  
  estimatedTime(peakHours) {
    if (peakHours) {
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }
}
