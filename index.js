class Driver {
    constructor(name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    };

    yearsExperienceFromBeginningOf(date) {
        let endDate = new Date(date);
        let n = endDate - this.startDate;
        return Math.floor(n / 31536000000)
    };
}

let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Route {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    };

    blocksTravelled() {
        let horizontalDistance = eastWest.indexOf(this.end.horizontal) - eastWest.indexOf(this.start.horizontal);
        let verticalDistance = this.end.vertical - this.start.vertical;
        let distanceTravelled = (Math.abs(horizontalDistance + verticalDistance));
        return distanceTravelled;
    };

    estimatedTime(peak) {
        if(peak){
            return this.blocksTravelled()/2;
          }
          else{
            return this.blocksTravelled()/3;
          };
    }
}
