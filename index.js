let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Driver {
	constructor(name, startDate) {
		this.name = name;
		this.startDate = new Date(startDate);
	};

	yearsExperienceFromBeginningOf(year) {
		let date = this.startDate.getFullYear();
		return year - date;
	};
};

class Route {
	constructor(beginningLocation, endingLocation) {
		this.beginningLocation = beginningLocation;
		this.endingLocation = endingLocation;
	};

	blocksTravelled() {
		let vDistance = this.endingLocation.vertical - this.beginningLocation.vertical;
		let hDistance = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal);
		return Math.abs(vDistance + hDistance);
	};

	estimatedTime(peak) {
		if (peak) {
			return this.blocksTravelled() / 2;
		} else {
			return this.blocksTravelled() / 3;
		};
	};
};

