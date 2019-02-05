class Driver {
    constructor(name, startDate) {
        this.name = name;
        this.startDate = new Date(startDate);
    }

   yearsExperienceFromBeginningOf(num) {
       return parseInt(num, 10) - this.startDate.getFullYear();
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

class Route {
    constructor(beginningLocation, endingLocation) {
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }

    blocksTravelled() {
        let startNum = parseInt(this.beginningLocation.vertical)
        let endNum = parseInt(this.endingLocation.vertical)

        let vert = (startNum >= endNum ? startNum - endNum : endNum - startNum)

        let startHori = eastWest.indexOf(this.beginningLocation.horizontal)
        let endHori = eastWest.indexOf(this.endingLocation.horizontal)

        let hori = (startHori >= endHori ? startHori - endHori : endHori - startHori)

        return vert + hori
    }

    estimatedTime(arg) {
       return (arg ? this.blocksTravelled()/2 : this.blocksTravelled()/3)  
    }
}
