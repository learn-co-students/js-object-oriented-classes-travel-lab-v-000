let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']


class Driver {
    constructor(name,joined) {
        this.name = name;
        this.startDate = new Date(joined);
    }

    yearsExperienceFromBeginningOf(year) {
        return year - this.startDate.getFullYear() - 1
    }
}

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
        
    }


    blocksTravelled() {
        return (Math.abs(this.beginningLocation['vertical'] - this.endingLocation['vertical']) + Math.abs(eastWest.indexOf(this.beginningLocation['horizontal']) - eastWest.indexOf(this.endingLocation['horizontal'])))   
    }

    estimatedTime(onPeak) {
        if (onPeak) {
            return this.blocksTravelled()/2
        } else {
        return this.blocksTravelled()/3
            }
    }
     
}