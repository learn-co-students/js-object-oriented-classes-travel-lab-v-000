let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
    constructor(name, startDate) {
        this.name = name
        this.startDate = new Date(startDate)
    }

    yearsExperienceFromBeginningOf(year) {
        let endDate = new Date(year, 0, 1)
        let totalYears = (endDate - this.startDate)/(365*24*60*60*1000)
        return parseInt(totalYears)
    }
}

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation
        this.endingLocation = endingLocation
    }
    
    avenueToInteger(avenue) {
        return eastWest.indexOf(avenue)
    }
    
    blocksTravelled() {
        let horizontalDistance = Math.abs(this.avenueToInteger(this.beginningLocation.horizontal) - this.avenueToInteger(this.endingLocation.horizontal))
        
        let verticalDistance = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
        
        return horizontalDistance + verticalDistance
    }
    
    estimatedTime(peak) {
        if (peak) {
           return this.blocksTravelled() / 2
        } else {
           return this.blocksTravelled() / 3
        }
    }
}


