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
	constructor(name, joinDay){
		this.name = name
		this.startDate = new Date(joinDay)
	}

	yearsExperienceFromBeginningOf(endDate){
		let startDate = this.startDate
		let startYear = startDate.getFullYear()
		return endDate - startYear
	}
}
class Route {
	constructor(beginningLocation, endingLocation){
	this.beginningLocation = beginningLocation;
	this.endingLocation = endingLocation;
	}

	blocksTravelled() {
		let hStart = eastWest.indexOf(this.beginningLocation.horizontal);
		let hEnd = eastWest.indexOf(this.endingLocation.horizontal);
		let vStart = this.beginningLocation.vertical;
		let vEnd = this.endingLocation.vertical;
		let hBlocks = null;
		let vBlocks = null;

		if (hStart > hEnd) {
			hBlocks = hStart - hEnd
		} else {
			hBlocks = hEnd - hStart
		}

		if (vStart > vEnd) {
			vBlocks = vStart - vEnd
		} else {
			vBlocks = vEnd - vStart
		}
		return vBlocks + hBlocks
	}

	estimatedTime( peakTime ) {
		if (peakTime === true){
			return this.blocksTravelled() / 2
		} else {
			return this.blocksTravelled() / 3
		}
	}
}
