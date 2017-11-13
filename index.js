class Driver {
    constructor(name, startDate) {
        this.name = name
        this.startDate = new Date(startDate)
    }

    yearsExperienceFromBeginningOf(endDate) {
        const yearInString = this.startDate.toString().split(" ")[3]
        const yearInteger = parseInt(yearInString)
        return endDate - yearInteger -1
    }
}

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation
        this.endingLocation = endingLocation
    }

    blocksTravelled() {
        const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
        const vBlocksTravelled = this.beginningLocation.vertical - this.endingLocation.vertical
        const blocksTravelled = vBlocksTravelled < 0 ? Math.abs(vBlocksTravelled) : vBlocksTravelled
        const startAve = eastWest.filter((avenue) => avenue.startsWith(this.beginningLocation.horizontal));
        const endAve = eastWest.filter((avenue) => avenue.startsWith(this.endingLocation.horizontal));
        const a = eastWest.indexOf(startAve[0])
        const b = eastWest.indexOf(endAve[0])
        const avenuesTravelled = a > b ? a-b : b-a
        return blocksTravelled + avenuesTravelled
    }

    estimatedTime(peakHours=false) {
        return peakHours ? Math.round(this.blocksTravelled() / 2)   : Math.round(this.blocksTravelled() / 3)
    }

}


