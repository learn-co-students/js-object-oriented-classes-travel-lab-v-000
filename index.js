class Driver { 
  constructor(name, start) {
    this.name = name;
    this.startDate = new Date(start); 
  } 
  
  yearsExperienceFromBeginningOf(year) { 
    let endYear = new Date(year, 1, 1);
    return Math.round((endYear - this.startDate)/(1000*60*60*24*365.25));
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
 
// also can use .indexOf 
 
  blocksTravelled() { 
    let vBlocks = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
    
     let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let hStartIndex = eastWest.findIndex(s => s === this.beginningLocation.horizontal);
    let hEndIndex = eastWest.findIndex(s => s === this.endingLocation.horizontal);
    let hBlocks = Math.abs(hStartIndex - hEndIndex);
    
    return vBlocks + hBlocks;
  } 
  
  estimatedTime(peak) {
    if (peak === true){
      return Math.round((this.blocksTravelled()/2));
    } else {
      return Math.round((this.blocksTravelled()/3));
    }
  }
}

