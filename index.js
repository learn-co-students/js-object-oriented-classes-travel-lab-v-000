class Driver {
    constructor(name, start){
        this.name = name;
        this.startDate = new Date(start);
    }

    yearsExperienceFromBeginningOf(year) {
        return year - this.startDate.getFullYear();
    }
}

class Route {
    constructor(beginningLocation, endingLocation){
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }

    blocksTravelled() {
        let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
        let vblocks = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);
        let hblocks = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));
        return vblocks + hblocks;
    }

    estimatedTime(peak) {
        return peak ? this.blocksTravelled()/2 : this.blocksTravelled()/3;
    }
}


