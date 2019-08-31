class Driver {
  constructor(name, startDate){
  this.name = name
  this.startDate = new Date(startDate)
}
	yearsExperienceFromBeginningOf(year) {
		return year - this.startDate.getFullYear()
	}

}
 
class Route {
  constructor(beginningLocation, endingLocation){
  this.beginningLocation = beginningLocation
  this.endingLocation = endingLocation
}

	getKeyByValue(object, value) {
  		return Object.keys(object).find(key => object[key] === value);
	}

	blocksTravelled() {
		let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
		let determineNorthSouthBlocks = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical)
		let determineEastWestBlocks = Math.abs(this.getKeyByValue(eastWest, this.endingLocation.horizontal) - this.getKeyByValue(eastWest, this.beginningLocation.horizontal))
		return determineNorthSouthBlocks + determineEastWestBlocks;
	}

	estimatedTime(peakHours) {
		if (peakHours) {
			return this.blocksTravelled() / 2;
		}
		else {
			return this.blocksTravelled() / 3;
		}
	}

}
