

let eastWest = [
    '1st Avenue',
    '2nd Avenue',
    '3rd Avenue',
    'Lexington Avenue',
    'Park',
    'Madison Avenue',
    '5th Avenue'
  ];

class Driver {
    constructor(name, start_date) {
        this.name = name;
        this.startDate = new Date (start_date)
    }

    yearsExperienceFromBeginningOf(years){
          return years - this.startDate.getFullYear()
    }    

}
class Route {
    constructor(beginningLocation, endingLocation){
// note: Both of these arguments are JavaScript objects with attributes of horizontal and vertical.
 this.beginningLocation = beginningLocation
 this.endingLocation =   endingLocation
  }

  blocksTravelled(){
    var vertical =  parseInt(this.endingLocation.vertical) - parseInt(this.beginningLocation.vertical)

    var horizontal = parseInt(eastWest.indexOf(this.endingLocation.horizontal)) -  (eastWest.indexOf(this.beginningLocation.horizontal))
     
    return vertical + horizontal
  }
  
  estimatedTime(peak){
        return  peak ?  this.blocksTravelled() / 2 :  this.blocksTravelled() / 3

  }
//  note:  "this" is the self version of javascript...

}