let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Driver {
	constructor(name, startDate) {
		this.name = name
		this.startDate = new Date(startDate)
	}
	yearsExperienceFromBeginningOf(year) {
		return year - this.startDate.getUTCFullYear();
	}
}

class Route {
	constructor(beginningLocation, endingLocation) {
		this.beginningLocation = beginningLocation
		this.endingLocation = endingLocation
	}
	blocksTravelled() {
		let vertical = this.beginningLocation.vertical - this.endingLocation.vertical
		let horizontal = eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal)

		return Math.abs(vertical) + Math.abs(horizontal)
	}
	estimatedTime(peak){
		if (peak) {
			return this.blocksTravelled()/2
		} else {
			return this.blocksTravelled()/3
		}
	}
}