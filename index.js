class Driver {
  constructor(name, string){
    this.name = name
    this.startDate = new Date(string)
  }
 yearsExperienceFromBeginningOf(year) {
   var endDate = new Date("Jan 1, " + year)
   return Math.ceil((endDate-this.startDate)/1000/3600/24/365)
 }
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

class Route {
  constructor(start, finish) {
    this.start = start;
    this.finish = finish;
  }

horizontalTravelled() {return (eastWest.lastIndexOf(this.finish.horizontal)-eastWest.lastIndexOf(this.start.horizontal))}
verticalTravelled() {return (this.finish.vertical - this.start.vertical)}
blocksTravelled() {return (this.horizontalTravelled() + this.verticalTravelled())}
estimatedTime(peak = false) {
  if (peak) {return this.blocksTravelled()/2}
    else {return (this.blocksTravelled()/3)}
  }


  }
