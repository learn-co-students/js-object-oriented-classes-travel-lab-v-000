const convertMonth = function (string) {
  const array = string.split(' ')
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  const filterArray = months.filter(function (word) {
    array[0].slice(0, word.length) === word
  })
  return months.indexOf(filterArray[0]) + 1;
}

class Driver {
  constructor (name, startDate) {
    this.name = name
    this.startDate = new Date(Date.UTC(startDate.split(' ').slice(-1)[0], convertMonth(startDate)))
  }

  yearsExperienceFromBeginningOf (endDate) {
    return endDate - this.startDate.getFullYear() - 2;
  }
}

class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    if (this.endingLocation.horizontal === this.beginningLocation.horizontal) {
      return this.endingLocation.vertical - this.beginningLocation.vertical;
    } else {
      return this.endingLocation.vertical - this.beginningLocation.vertical + 4;
    }
  }

  estimatedTime(rushHour = false) {
    if (rushHour) {
      return this.blocksTravelled()/2;
    } else {
      return this.blocksTravelled()/3;
    }
  }
}
