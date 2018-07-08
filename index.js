class Driver {
	constructor(name, startDate) {
		this.name = name,
		this.startDate = new Date(startDate)
	}

	yearsExperienceFromBeginningOf(year) {
		return year - this.startDate.getFullYear();
	}
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']	

class Route {
	constructor(beginningLocation, endingLocation) {
		this.beginningLocation = beginningLocation
		this.endingLocation = endingLocation
	}

	blocksTravelled() {
		let h = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
		let v = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal))
		return h + v
	}
	
	estimatedTime(peak_hours) {
		return this.blocksTravelled() / (peak_hours ? 2 : 3)
	}
}