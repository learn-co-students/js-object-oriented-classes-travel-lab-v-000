class Driver{
    constructor(name, joinDate){
        this.name = name;
        this.startDate = new Date(joinDate);
    }

    yearsExperienceFromBeginningOf(endDate){
        const end = new Date(endDate);
        return end.getFullYear() - this.startDate.getFullYear() + 1;
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
    constructor(beginningLocation, endingLocation){
        this.beginningLocation = beginningLocation;
        this.endingLocation = endingLocation;
    }
    blocksTravelled(){
        let total = this.endingLocation.vertical - this.beginningLocation.vertical;
        const startIndex = eastWest.indexOf(this.beginningLocation.horizontal);
        const endIndex = eastWest.indexOf(this.endingLocation.horizontal);
        total += (endIndex - startIndex);
        return total;
    }

    estimatedTime(peak){
        if(!peak){
         return this.blocksTravelled() / 3;
        }else{
            return this.blocksTravelled() / 2;
        }
    }
}