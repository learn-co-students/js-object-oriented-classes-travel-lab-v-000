class Driver {
	constructor(name, startDate){
		this.name = name
		this.startDate = new Date(startDate)
	}

	yearsExperienceFromBeginningOf(endDate){
		return endDate - this.startDate.getFullYear() 
		degugger
	}


}


class Route {
	constructor(beginningLocation, endingLocation){
		this.beginningLocation = beginningLocation
		this.endingLocation = endingLocation
	}

	// let route = new Route({horizontal: 'Park', vertical: '34'}, {horizontal: 'Park', vertical: '45'})

	blocksTravelled(){
		let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
		let verticalDistance = Math.abs(parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical))
		let horizontalDistance = Math.abs(eastWest.indexOf(this.endingLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal))
		return verticalDistance + horizontalDistance
	}

	estimatedTime(peakHour){
		if (peakHour === true ){
			return this.blocksTravelled()/2
		} else {
			return this.blocksTravelled()/3
		}
		
	}

}

