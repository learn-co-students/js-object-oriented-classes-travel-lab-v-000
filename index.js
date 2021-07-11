// initialized with a name, and a string representing the day that he joined Scuber

  class Driver {
    constructor(name, startDate) {
      this.name = name;
      this.startDate = new Date(startDate);
    }
    
// takes an argument of a year, returns # years since driver's startDate

    yearsExperienceFromBeginningOf(endDate) {
      let yr = new Date(endDate, 1, 1);
      let diff = (yr - this.startDate) / (1000*60*60*24*365);
      return parseInt(diff);
    }
  }

  let eastWest = [
      '1st Avenue',
      '2nd Avenue',
      '3rd Avenue',
      'Lexington Avenue',
      'Park',
      'Madison Avenue',
      '5th Avenue'
  ];
    
  class Route {
    constructor(beginningLocation, endingLocation) {
      this.beginningLocation = beginningLocation;
      this.endingLocation = endingLocation;
    }

// return an int # of blocks travelled
    blocksTravelled() {
      let begVert = this.beginningLocation['vertical'] * 1;
      let endVert = this.endingLocation['vertical'] * 1;
      let vertical = endVert - begVert;
      
      let begHorz = this.beginningLocation['horizontal'];
      let endHorz = this.endingLocation['horizontal'];
      
      let begHorzIndex = eastWest.indexOf(begHorz);
      let endHorzIndex = eastWest.indexOf(endHorz);
      
      let horizontal = endHorzIndex - begHorzIndex;
      
      return (vertical + horizontal);
    }
    
// return # minutes estimated for trip. During off peak hours, a driver travels three blocks in a minute, while during peak hours a driver travels an estimated two blocks in a minute.

    estimatedTime(peak) {
      if(peak) {
        return this.blocksTravelled() / 2;
      }
      else {
        return this.blocksTravelled() / 3;
      }
    }
    
  }