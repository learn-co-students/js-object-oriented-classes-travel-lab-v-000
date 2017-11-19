
let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

class Driver
{
  constructor(name,startDate)
  {
    this.name = name;
    this.startDate = new Date(startDate);
 }

 yearsExperienceFromBeginningOf(endDate)
 {
   return endDate-this.startDate.getFullYear()-1;
 }
}


class Route
{
  constructor(beginningLocation,endingLocation)
  {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

   blocksTravelled()
    {

      let streetTravelled = this.endingLocation.vertical - this.beginningLocation.vertical;
      let blocksTravelled = eastWest.indexOf(this.endingLocation.horizontal)- eastWest.indexOf(this.beginningLocation.horizontal);
      return streetTravelled + blocksTravelled;

    }

   estimatedTime(peakTime)

  {
    if (peakTime)
    {
      return this.blocksTravelled()/2;
    }
    else
     {
      return this.blocksTravelled()/3;
      }


   }

}
