class Driver {
	constructor(name, date) {
		this.name = name;
		this.startDate = new Date(date);
	}

	yearsExperienceFromBeginningOf (year) {
		const endDate = new Date(year, 1, 1)
		return endDate.getFullYear() - this.startDate.getFullYear();
	}

}


class Route {
	constructor(beginningLocation, endingLocation) {
		this.beginningLocation = beginningLocation;
		this.endingLocation = endingLocation;
	}

	blocksTravelled () {
		let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
	
		let ew = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));
		let ns = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical);

		return ew + ns
	}

	estimatedTime (peakHours) {
		return peakHours ? (this.blocksTravelled() / 2) : (this.blocksTravelled() / 3);
	}
}