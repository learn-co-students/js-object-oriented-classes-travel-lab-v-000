class Driver {
    constructor(name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    }
    
    yearsExperienceFromBeginningOf(endDate) {
        return endDate - this.startDate.getFullYear();
    }
}

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }
    
    blocksTravelled() {
        let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
        let ver = this.endingLocation.vertical - this.beginningLocation.vertical;
        let hor = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal) 
        return ver+hor;
    }
    
    estimatedTime(busy) {
        if (busy === true) {
            return this.blocksTravelled()/2;
        } else {
            return this.blocksTravelled()/3;
        }
    }
}