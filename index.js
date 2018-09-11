class Driver {
    constructor(name, startDate) {
        this.name = name
        this.startDate = new Date(startDate)
    }

    yearsExperienceFromBeginningOf(thisYear) {
        let startYear = this.startDate.getFullYear()
        return thisYear - startYear - 1
    }
}

const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']


class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation
        this.endingLocation = endingLocation
    }

    aveToNum(avenue) {
      return eastWest.indexOf(avenue)
    }
    
    blocksTravelled() {
        let horizontal = this.aveToNum(this.endingLocation.horizontal) - this.aveToNum(this.beginningLocation.horizontal)
        let vertical = this.endingLocation.vertical - this.beginningLocation.vertical

        return Math.abs(horizontal) + Math.abs(vertical)
    }

    estimatedTime(peak) {
       if (peak) {
         return this.blocksTravelled() / 2
       } else {
         return this.blocksTravelled() / 3
       }
    }
}

    
    

