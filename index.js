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
	constructor(name, day) {
		this.name = name
		this.startDate = new Date(day)
	}

	yearsExperienceFromBeginningOf(endDate) {
		return endDate - this.startDate.getFullYear()
	}
}

class Route {
	constructor(beginningLocation, endingLocation) {
		this.beginningLocation = beginningLocation
		this.endingLocation = endingLocation
	}

	horizontalTravelled() {
		return Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
	}

	verticalTravelled() {
		return Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
	}

	blocksTravelled() {
		return this.horizontalTravelled() + this.verticalTravelled()
	}

	estimatedTime(peak) {
		if (peak) {
			return this.blocksTravelled() / 2
		}
		else {
			return this.blocksTravelled() / 3
		}
	}
}
