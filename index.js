class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }
  
  yearsExperienceFromBeginningOf(year) {
    const thisYear = new Date(year).getFullYear();
    return thisYear - this.startDate.getFullYear() + 1;
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  
  blocksTravelled() {
 		let avenues = [
 		  '1st Avenue',
 		  '2nd Avenue',
 		  '3rd Avenue',
 		  'Lexington Avenue',
 		  'Park',
 		  'Madison Avenue',
 		  '5th Avenue'
 	 ];
 		
 	 const northSouth =  Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
 	 const eastWest = Math.abs(avenues.indexOf(this.beginningLocation.horizontal) - avenues.indexOf(this.endingLocation.horizontal));
 	 return northSouth + eastWest;
  }
  
  estimatedTime(peak) {
 		if (peak === true) {
 			return this.blocksTravelled() / 2;
 		}
 		else {
 			return this.blocksTravelled() / 3;
 		}
 	}
}





