class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  startDate() {
    return this.startDate
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear()
  }
}

class Route {
  constructor(begin, end){
    this.begin = begin
    this.end = end
  }

  blocksTravelled(){
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let horizontal = eastWest.indexOf(this.end.horizontal) - eastWest.indexOf(this.begin.horizontal)
    let vertical = this.end.vertical - this.begin.vertical
    return (Math.abs(horizontal) + Math.abs(vertical))
  }

  estimatedTime(peak = false){
		if(peak){
			return this.blocksTravelled()/2
		} else {
			return this.blocksTravelled()/3
		}
	}
}
