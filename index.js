class Driver {
	constructor(name, startdate) {
		this.name = name;
		this.startDate = new Date(startdate);
	};

	yearsExperienceFromBeginningOf(year) {
		return year - this.startDate.getFullYear() - 1
	};
}

class Route {

	constructor(begin, end) {
		this.beginningLocation = begin;
		this.endingLocation = end;
	};

	blocksTravelled() {
		const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
		const verticalBlocks = Number(this.beginningLocation.vertical) - Number(this.endingLocation.vertical)
		const horizontalOne = eastWest.indexOf(this.beginningLocation.horizontal) + 1
		const horizontalTwo = eastWest.indexOf(this.endingLocation.horizontal) + 1
		const horizontalBlocks = horizontalOne - horizontalTwo

		return Math.abs(verticalBlocks) + Math.abs(horizontalBlocks)
	};

	estimatedTime(peak) {
		if (peak === true)
			return this.blocksTravelled() / 2
		else
			return this.blocksTravelled() / 3
	};
}
