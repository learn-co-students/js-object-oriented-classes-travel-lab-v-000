class Driver {
	constructor(name, startDate) {
		this.name = name;
		this.startDate = new Date(startDate);
	}

	yearsExperienceFromBeginningOf(year) {
		return year - this.startDate.getFullYear();
	}

}

class Route {
	constructor(beginningLocation, endingLocation) {
		this.beginningLocation = beginningLocation;
		this.endingLocation = endingLocation;
	}

	blocksTravelled() {
		let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

		let distanceHorizontal = (eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));
		let distanceVertical = (this.endingLocation.vertical - this.beginningLocation.vertical);
		let distanceDifference = (distanceHorizontal < 1 ? distanceHorizontal * -1 : distanceHorizontal) + (distanceVertical < 1 ? distanceVertical * -1 : distanceVertical);

		return distanceDifference;
	}

	estimatedTime(peakHours) {
		if (peakHours) {
			return this.blocksTravelled() / 2;
		} else {
			return this.blocksTravelled() / 3;
		}
	}
}
