class Airport {
  constructor( number=20 ){
    this.capacity = number;
    this.apron = [];
  }
  
  Land(plane) {
    if (plane.isStormy) {
      var error = new Error ( "Plane cannot land in stormy weather" );
      throw error ;
    }
    else if (this.apron.length >= this.capacity) {
      var error = new Error ( "Airport has reached capacity" );
      throw error ;
    }
    else {
      this.apron.push(plane);
    }
  }

  TakeOff(plane) {
    this.apron.pop(plane);
  }
}