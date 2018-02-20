
class Driver {
	constructor(name, startDate){
		this.name = name
		this.startDate = new Date(startDate)
	}

	startDate(){
		return this.startDate
	}

	yearsExperienceFromBeginningOf(year){
		return year - this.startDate.getFullYear()
	}
}

class Route {
	constructor(beginningLocation, endingLocation){
		this.beginningLocation = beginningLocation
		this.endingLocation = endingLocation
	}

	blocksTravelled(){
		let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
		const horizontal = eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal)
		const vertical = this.beginningLocation.vertical - this.endingLocation.vertical
		return checkPositive(horizontal) + checkPositive(vertical)
	}

	estimatedTime(peak = false){
		if(peak){
			return this.blocksTravelled()/2
		} else {
			return this.blocksTravelled()/3
		}
	}
}

function checkPositive(num) {
	return num > 0 ? num : (num * -1)
}