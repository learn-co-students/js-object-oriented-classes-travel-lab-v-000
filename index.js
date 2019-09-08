class Driver{
	constructor(name, startDate){
		this.name = name;
		this.startDate = new Date(startDate);
	}

	yearsExperienceFromBeginningOf(year){
		return Number(year) - this.startDate.getFullYear();
	}

}

const blocksInOrder = [
	"1st Avenue",
	"2nd Avenue",
	"3rd Avenue",
	"Lexington",
	"Park",
	"Madison",
	"5th Avenue",
	"6th Avenue",
	"7th Avenue",
	"8th Avenue",
	"9th Avenue",
	"10th Avenue",
	"11th Avenue",
	"12th Avenue"
]

class Route{
	constructor(start, dest){
		this.start = start
		this.dest = dest
	}

	horizontalDistance(){
		const horStart = blocksInOrder.indexOf(this.start.horizontal)
		const horEnd = blocksInOrder.indexOf(this.dest.horizontal)
		return Math.abs(horStart - horEnd)
	}

	verticalDistance(){
		const vertStart = Number(this.start.vertical)
		const vertEnd = Number(this.dest.vertical)
		return Math.abs(vertStart - vertEnd)
	}

	blocksTravelled(){
		return this.horizontalDistance() + this.verticalDistance()
	}

	estimatedTime(peak = false){
		let bpm;
		if(peak){
			bpm = 2
		} else{
			bpm = 3
		}
		return this.blocksTravelled()/bpm
	}

}
