
class Driver {
	constructor(name, startDay){
		this.name = name;
		this.startDate = new Date(startDay);
	}

	yearsExperienceFromBeginningOf(year){
		

		return year - this.startDate.getFullYear() - 1;
	}
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Route {

	constructor(beginningLocation, endLocation){
		this.beginningLocation = beginningLocation;
		this.endLocation = endLocation;
	}

	blocksTravelled() {
		let blocks = Math.abs(this.endLocation.vertical - this.beginningLocation.vertical);
		blocks += Math.abs(eastWest.indexOf(this.endLocation.horizontal) - eastWest.indexOf(this.beginningLocation.horizontal));
		return blocks;
	}

	estimatedTime(peakHours) {
		if(peakHours){
			return this.blocksTravelled()/2
		} else {
			return this.blocksTravelled()/3
		}
	}


}

const route = new Route({horizontal: 'Park', vertical: '34'}, {horizontal: 'Park', vertical: '45'})
console.log(route.blocksTravelled());