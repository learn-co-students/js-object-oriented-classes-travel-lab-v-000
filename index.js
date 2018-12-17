
class Driver {
    constructor(name, startDate){
        this.name = name;
        this.startDate = new Date(startDate);
    };

    yearsExperienceFromBeginningOf(endDate) {
        return endDate - this.startDate.getFullYear();
    };
}

class Route {
    constructor(beginningLocation, endingLocation){
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }

    blocksTravelled() {
        let eastWest = [
            '1st Avenue',
            '2nd Avenue',
            '3rd Avenue',
            'Lexington Avenue',
            'Park',
            'Madison Avenue',
            '5th Avenue'
        ]; 
        let streetBlocks = this.endingLocation.vertical - this.beginningLocation.vertical
        let avenueBlocks = (eastWest.indexOf(`${this.endingLocation.horizontal}`) + 1) - (eastWest.indexOf(`${this.beginningLocation.horizontal}`) + 1);
        return streetBlocks + avenueBlocks;
    }

    estimatedTime(peakHours) {
        if (peakHours === true) {        
            return this.blocksTravelled() / 2;
        } else {
            return this.blocksTravelled() / 3;
        }   
    }
}