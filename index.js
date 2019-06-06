
class Driver {
    constructor(name, date) {
        this.startDate = new Date(date);
        this.name = name;
    }
    yearsExperienceFromBeginningOf(year) {
        return (year - this.startDate.getFullYear())
    }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation  = beginningLocation;
        this.endingLocation = endingLocation;
    }

    streetFinder(street) {
      return eastWest.indexOf(street) + 1;
    }
        
    blocksVTravelled() {
        let vDistance = Math.abs(parseInt(this.beginningLocation.vertical) - parseInt(this.endingLocation.vertical));
        return vDistance
    }
    
    blocksHTravelled() {
      let hDistance = Math.abs(this.streetFinder(this.beginningLocation.horizontal) - this.streetFinder(this.endingLocation.horizontal));
      return hDistance
    }

    blocksTravelled() {
      return (this.blocksHTravelled() + this.blocksVTravelled())
    }
    
    estimatedTime(peak = false) {
        if (peak === false) {
            return this.blocksTravelled() / 3
        } else {
            return this.blocksTravelled() / 2
        }
    }

  
    
}