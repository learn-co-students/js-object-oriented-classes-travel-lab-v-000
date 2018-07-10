class Driver {
    constructor(name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    }

    yearsExperienceFromBeginningOf(endYear){
        return endYear - this.startDate.getFullYear();
    }
}

class Route {
    constructor(beginningLocation, endLocation) {
        this.beginningLocation = beginningLocation;
        this.endLocation = endLocation;
    }

    blocksTravelled() {
        let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
        const totalHorizontal = Math.abs(eastWest.indexOf(this.endLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));
        const totalVertical = Math.abs(this.endLocation.vertical - this.beginningLocation.vertical);
        return totalHorizontal + totalVertical;
    }

    estimatedTime(peak) {
        const blocks = this.blocksTravelled()
        if(peak === true) {
            return blocks/2;
        }else{
            return blocks/3;
        }
    }
}
