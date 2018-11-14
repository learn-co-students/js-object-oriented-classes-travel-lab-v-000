let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
    constructor(name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    }
    yearsExperienceFromBeginningOf(year) {
        var endDate = new Date(year, 1, 1)
        return parseInt((endDate - this.startDate) / 31536000000)
      }
}

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation
        this.endingLocation = endingLocation
    }
    avenueInteger(street) {
        return eastWest.indexOf(street)
    }
    blocksTravelled() {
        var horizontalDistance = this.avenueInteger(this.endingLocation.horizontal) - this.avenueInteger(this.beginningLocation.horizontal)
        var verticalDistance = parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical)
        return Math.abs(horizontalDistance) + Math.abs(verticalDistance)
    }
    estimatedTime(peak) {
        if (peak){
            return (this.blocksTravelled()/ 2)
        } else {
            return (this.blocksTravelled()/ 3)
        }
    }
}
