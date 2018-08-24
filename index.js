let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'] 
   
class Driver {
  constructor(name, startDate) {
    this.name = name 
    this.startDate = new Date(startDate)
  }
  
  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getFullYear() - 1
  }
}
   
class Route {
  constructor(start, end) {
    this.start = start 
    this.end = end 
  }

  
  blocksTravelled() {
    let start_h = eastWest.indexOf(this.start['horizontal'])
    let start_v = parseInt(this.start['vertical'], 10);
    let end_h = eastWest.indexOf(this.end['horizontal'])
    let end_v = parseInt(this.end['vertical'], 10);

    let v = Math.abs(start_v - end_v)
    let h = Math.abs(start_h - end_h)
    return v + h
  }
}



  // describe('blocksTravelled', function() {
  //   it('calculates the number of blocksTravelled', function() {
  //     let route = new Route({horizontal: 'Park', vertical: '34'}, {horizontal: 'Park', vertical: '45'})
  //     expect(route.blocksTravelled()).to.equal(11)
  //   })

  //   it('calculates the number of horizontal blocks travelled', function() {
  //     let route = new Route({horizontal: '1st Avenue', vertical: '34'}, {horizontal: 'Park', vertical: '34'})
  //     expect(route.blocksTravelled()).to.equal(4)
  //   })

  //   it('combines horizontal and vertical blocks travelled', function() {
  //     let route = new Route({horizontal: '1st Avenue', vertical: '34'}, {horizontal: 'Park', vertical: '45'})
  //     expect(route.blocksTravelled()).to.equal(15)
  //   })
  // })

  // describe('estimatedTime', function() {
  //   it('estimates time in minutes, with travel time of three blocks in a minute', function() {
  //     let route = new Route({horizontal: '1st Avenue', vertical: '34'}, {horizontal: 'Park', vertical: '45'})
  //     expect(route.estimatedTime()).to.equal(5)
  //   })

  //   it('estimates time in minutes, with travel time of two blocks in a minute during peak hours', function() {
  //     let route = new Route({horizontal: '1st Avenue', vertical: '34'}, {horizontal: 'Park', vertical: '46'})
  //     expect(route.estimatedTime(true)).to.equal(8)
  //   })
  // })