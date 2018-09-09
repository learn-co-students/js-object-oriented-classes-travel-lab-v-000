class Driver {
	constructor(name, startString) {
		this.name = name;
		this.startDate = new Date(startString);
	}

	yearsExperienceFromBeginningOf(year) {
		return year - this.startDate.getFullYear() -1;
	}
}


class Route {
	constructor(beginningLocation, endingLocation) {
		this.beginningLocation = beginningLocation;
		this.endingLocation = endingLocation;
	}

	blocksTravelled() {
		let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
		let distanceNS = parseInt(this.endingLocation.vertical, 10) - parseInt(this.beginningLocation.vertical, 10);
		let distanceEW = eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal);
		return Math.abs(distanceNS) + Math.abs(distanceEW);
	}

	estimatedTime(peakTime) {
		debugger;
		if (peakTime === true) {
			return this.blocksTravelled() / 2
		}
		else {
			return this.blocksTravelled() / 3
		}
	}

}
