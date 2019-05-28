class Driver {
    constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date( startDate );
    }

    yearsExperienceFromBeginningOf(year) {
        return year - this.startDate.getFullYear()
    }
}

class Route {
    constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
    }

    blocksTravelled() {
        let northSouth = endingLocation - beginningLocation;
        let eastWest = [
            '1st Avenue',
            '2nd Avenue',
            '3rd Avenue',
            'Lexington Avenue',
            'Park',
            'Madison Avenue',
            '5th Avenue'
          ];

          const index = beginningLocation.findIndex(horizontal => horizontal === eastWest) 

          
          if beginningLocation == eastWest || endingLocation == eastWest {
            let start = eastWest.findIndex
            let end = eastWest.findIndex
                return end - start;
          }
          else {
            return endingLocation - beginningLocation
          }
        
          

    }
}