class Driver {
	constructor(name, startDate) {
		this.name = name,
			this.startDate = new Date(startDate)
	}

	yearsExperienceFromBeginningOf(year) {
		return parseInt((year - this.startDate.getFullYear()));
	}

}

class Route {
	constructor(beginningLocation, endingLocation) {
		this.beginningLocation = beginningLocation,
			this.endingLocation = endingLocation
	}

	getEastWestIndex(location) {
		let ewIndex = 0
		let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
		ewIndex = eastWest.indexOf(location.horizontal)
		return ewIndex
	}

	blocksTravelled() {
		let nsBegin = 0
		let nsEnd = 0
		let ns = 0

		let ewBegin = 0
		let ewEnd = 0
		let ew = 0

		nsBegin = this.beginningLocation.vertical
		nsEnd = this.endingLocation.vertical
		ns = (nsBegin > nsEnd) ? nsBegin - nsEnd : nsEnd - nsBegin

		ewBegin = this.getEastWestIndex(this.beginningLocation)
		ewEnd = this.getEastWestIndex(this.endingLocation)
		ew = (ewBegin > ewEnd) ? ewBegin - ewEnd : ewEnd - ewBegin

		return ns + ew
	}

	estimatedTime(peak) {
		if (!peak) {
			return this.blocksTravelled() / 3
		} else
			if (peak) {
				return this.blocksTravelled() / 2
			}
	}
}
