class Driver {
    constructor(name, startDate) {
        this.name = name
        this.startDate = new Date(startDate)
    }
    
    yearsExperienceFromBeginningOf(endDate) {
        endDate = new Date(endDate)
        return endDate - this.startDate.getFullYear()
    }
}


class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation
        this.endingLocation = endingLocation
        
    }
    
    avenueToInteger(avenue) {
        let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
        return eastWest.indexOf(avenue)
    }
    
    blocksTravelled(){
        let vertical = this.beginningLocation.vertical - this.endingLocation.vertical
        let horizontal = this.avenueToInteger(this.beginningLocation.horizontal) - this.avenueToInteger(this.endingLocation.horizontal)
        
        return (Math.abs(horizontal) + Math.abs(vertical)) 
    }
    
    estimatedTime(peakHours){
        if (peakHours) {
            return (this.blocksTravelled() / 2)
        } else {
            return (this.blocksTravelled() / 3)
        }
    }
    
}