class Driver {
	constructor(name, startDate) {
		this.name = name 
		this.startDate = new Date(startDate)
	}
	yearsExperienceFromBeginningOf(year) {
        return year - this.startDate.getFullYear();
    }
}

let eastWest = [
    '1st Avenue',
    '2nd Avenue',
    '3rd Avenue',
    'Lexington Avenue',
    'Park',
    'Madison Avenue',
    '5th Avenue'
];

class Route {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    getAvenueIndex(avenue) {
        return eastWest.indexOf(avenue);
    }
    blocksTravelled() {
        let horizontalDistance =
            this.getAvenueIndex(this.end.horizontal) -
            this.getAvenueIndex(this.start.horizontal);
        let verticalDistance =
            this.end.vertical - this.start.vertical;
        return Math.abs(horizontalDistance) + Math.abs(verticalDistance);
    }
    estimatedTime(peak) {
        if (peak) {
            return this.blocksTravelled() / 2;
        } else {
            return this.blocksTravelled() / 3;
        }
    }
}