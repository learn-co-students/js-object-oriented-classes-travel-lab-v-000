class Driver {
    constructor (name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    }

    yearsExperienceFromBeginningOf(year) {
        return new Date(`${year}`,0).getFullYear() - this.startDate.getFullYear();
    }
}


class Route {

    constructor (beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }

    blocksTravelled() {
        let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 
                        'Park', 'Madison Avenue', '5th Avenue'];
        return Math.abs(this.endingLocation['vertical'] - 
                this.beginningLocation['vertical']) + 
                Math.abs(eastWest.indexOf(this.endingLocation['horizontal']) - 
                eastWest.indexOf(this.beginningLocation['horizontal']));
    }

    estimatedTime(peakHours) {
        if (peakHours) {
            return this.blocksTravelled()/2;
        } else {
            return this.blocksTravelled()/3;
        }
    }

}
