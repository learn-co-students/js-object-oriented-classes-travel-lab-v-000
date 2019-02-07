class Driver{ 
	constructor(name, date) {
		this.name = name;
		this.startDate = new Date(date)
	}

	yearsExperienceFromBeginningOf(year) {
		let startYear = 1900 + this.startDate.getYear() 
		let today = new Date()
		return year - startYear
	}

}


class Route {
	constructor(beginningLocation, endingLocation) {
		this.beginningLocation = beginningLocation;
		this.endingLocation = endingLocation;


	}


	blocksTravelled() { 
		let verticalTraveled =  Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
		let horizontalTraveled = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal)- eastWest.indexOf(this.endingLocation.horizontal))
		return verticalTraveled + horizontalTraveled
		}

		estimatedTime(peakHours) {
			if (peakHours) { 
				return this.blocksTravelled() / 2 
			}
		
			else {
				return this.blocksTravelled() / 3
			}
		}
	}
	


let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];