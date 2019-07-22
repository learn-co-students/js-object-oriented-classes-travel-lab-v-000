
let eastWest = [
    '1st Avenue',
    '2nd Avenue',
    '3rd Avenue',
    'Lexington Avenue',
    'Park',
    'Madison Avenue',
    '5th Avenue'
  ];

class Driver {
    constructor(name, start) {
      this.name = name;
      this.startDate = new Date(start);
    }
   
    yearsExperienceFromBeginningOf(year) {
      const endDate = new Date(year); 
      const end = endDate.getFullYear() + 1; 
      const start = this.startDate.getFullYear(); 
      
      return end - start; 

    }
  }

class Route {
constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
}

blocksTravelled() {
    const northSouthBlocks = Math.abs(this.beginningLocation["vertical"] - this.endingLocation["vertical"]); 
    const eastWestBlocks = Math.abs(eastWest.indexOf(this.beginningLocation["horizontal"]) - eastWest.indexOf(this.endingLocation["horizontal"])); 

    return northSouthBlocks + eastWestBlocks;
}

estimatedTime(rushHour) {
    const northSouthBlocks = Math.abs(this.beginningLocation["vertical"] - this.endingLocation["vertical"]); 
    const eastWestBlocks = Math.abs(eastWest.indexOf(this.beginningLocation["horizontal"]) - eastWest.indexOf(this.endingLocation["horizontal"])); 

    let distance = northSouthBlocks + eastWestBlocks;
    
    let rush = rushHour; 
    let pace; 

    if (rush === true) {
        pace = 2;
    } else {
        pace = 3; 
    };
 
    return distance / pace; 
}
}