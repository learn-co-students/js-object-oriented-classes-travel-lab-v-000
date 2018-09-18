class Driver {
  constructor(name, start){
    this.name = name;
    this.startDate = new Date(start);
  }

  yearsExperienceFromBeginningOf(year) {
    return year - this.startDate.getFullYear() -1;
  }

}

class Route {
  constructor(beginningLocation, endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }

  blocksTravelled(){
    let vertical, horizontal;
    const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let bv = this.beginningLocation.vertical;
    let ev = this.endingLocation.vertical;

    (bv > ev) ? vertical = (bv - ev) : vertical = (ev - bv);

    let bh = eastWest.indexOf(this.beginningLocation.horizontal)+1;
    let eh = eastWest.indexOf(this.endingLocation.horizontal)+1;

    (bh > eh) ? horizontal = (bh - eh) : horizontal = (eh - bh);

        return vertical + horizontal;
    }

    estimatedTime(value){
      let eTime;
      value ? eTime = this.blocksTravelled()/2 : eTime = this.blocksTravelled()/3;
      return eTime;
    }
  }
  //
  // let route = new Route({horizontal: 'Park', vertical: '34'}, {horizontal: 'Park', vertical: '45'})
  // expect(route.blocksTravelled()).to.equal(11)
