class Airport {
  constructor(){
    this.apron = [];
  }
  
  Land(plane) {
    this.apron.push(plane);
  }

  TakeOff(plane) {
    this.apron.pop(plane);
  }
}