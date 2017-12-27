class Driver {
    constructor(name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate)
    }

    yearsExperienceFromBeginningOf(year){
        return (year - this.startDate.getFullYear())

    }
    
}

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }

    blocksTravelled(){
        let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
        const horizontal = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);
        const vertical = this.endingLocation.vertical - this.beginningLocation.vertical;
        return horizontal + vertical;
    }

    estimatedTime(peakHrs){
        if (peakHrs){
            return this.blocksTravelled() / 2; 

        } else {
            return this.blocksTravelled() / 3;
        }
    }
}


