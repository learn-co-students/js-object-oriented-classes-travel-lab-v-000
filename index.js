class Driver{
  constructor (name, startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(year){
    let endDate = new Date(year, -1, 31);
    let yearsExperience = endDate.getYear() - this.startDate.getYear();
    return yearsExperience;
    // endDate = Thu, 31 Dec 2016 06:00:00 GMT
    // this.startDate = Wed, 09 Aug 1995 05:00:00 GMT
  }
}

class Route{
  constructor (beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    //streets
    let verticalDistance = this.endingLocation.vertical - this.beginningLocation.vertical;

    //avenues
    let avenues = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']

    function Avenue(avenueName){
      if (avenues.includes(avenueName)){
        return avenues.indexOf(avenueName);
      }
    }

    let horizontalDistance = Avenue(this.endingLocation.horizontal) - Avenue(this.beginningLocation.horizontal);
    //total distance
    return verticalDistance + horizontalDistance;
  }

  estimatedTime(peak){
    if (peak){
      return this.blocksTravelled()/2
    } else {
      return this.blocksTravelled()/3
    }
  }
}
