class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  };

  yearsExperienceFromBeginningOf(endDate) {
    return (endDate -1) - this.startDate.getFullYear() 
  };
};

const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']  

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }; 

  blocksTravelled() {    
    const vertical = this.endingLocation.vertical - this.beginningLocation.vertical
    const horizontal = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)
    
    return vertical + horizontal
  };

  estimatedTime(peak) {
    debugger;
    if (typeof peak === "undefined") {
      debugger;
      return this.blocksTravelled() / 3
    } else {
      return this.blocksTravelled() / 2
    };
  };
};