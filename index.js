class Driver {
	constructor(name, startDate) {
		this.name = name
		this.startDate = new Date(startDate)
	}

	yearsExperienceFromBeginningOf(year) {
		return year - this.startDate.getFullYear()
	}
}

class Route {
	
	constructor(beginningLocation, endingLocation) {
		// { horizontal: 'Park', vertical: '34' }
		this.beginningLocation = beginningLocation
		this.endingLocation = endingLocation
	}

	blocksTravelled() {
		// returns an integer with number of blocks travelled
		const eastWest = [
		  '1st Avenue',
		  '2nd Avenue',
		  '3rd Avenue',
		  'Lexington Avenue',
		  'Park',
		  'Madison Avenue',
		  '5th Avenue'
		];

		let horizontalBlocks = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);
		let firstPoint = eastWest.indexOf(this.beginningLocation.horizontal);
		let secondPoint = eastWest.indexOf(this.endingLocation.horizontal);
		let verticalBlocks = Math.abs(firstPoint - secondPoint);

		if (this.beginningLocation.horizontal === this.endingLocation.horizontal) {
			return horizontalBlocks;

		} else if (this.beginningLocation.vertical === this.endingLocation.vertical) {
			return verticalBlocks;

		} else {
			return horizontalBlocks + verticalBlocks;
		}
	}

	estimatedTime(peak) {

		if (peak) {
			return this.blocksTravelled() / 2
		} else {
			return this.blocksTravelled() / 3
		}
	}
}