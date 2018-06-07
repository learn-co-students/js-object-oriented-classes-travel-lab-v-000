class Driver {
	constructor(name, startDate){
		this.name = name;
		this.startDate = new Date(startDate);
	}

	yearsExperienceFromBeginningOf(year) {
		return year - this.startDate.getFullYear();
	}
}

class Route {
    constructor(start, dest){
        this.start = start;
        this.dest = dest;
    }

    eastWest() {
        return ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    }

    blocksTravelled() {
        const verticalDistance = Math.abs(this.dest.vertical - this.start.vertical);
        const horizontalDistance = Math.abs(
            this.eastWest().indexOf(this.dest.horizontal) - 
            this.eastWest().indexOf(this.start.horizontal)
        );
        return verticalDistance + horizontalDistance;
    }

    estimatedTime(isPeakHours = false) {
        return isPeakHours ? 
            Math.ceil(this.blocksTravelled() / 2) : 
            Math.ceil(this.blocksTravelled() / 3);
    }
}


