describe('Airport', function() {

  describe('land', function() {
    it('instructs a plane to land', function() {
      var airport = new Airport();
      var plane = new Plane();
      airport.Land(plane);
      expect(airport.apron.includes(plane)).toBe(true)
    });

  describe('weather', function() {
    it('cannot land if the weather is stormy', function() {
      var airport = new Airport();
      var plane = jasmine.createSpyObj('plane',['isStormy']);
      plane.isStormy(true);
      expect(function() { airport.Land(plane); } ).toThrow(new Error("Plane cannot land in stormy weather"))
    });
  });

    it('prevents landing when the airport is full', function() {
      var airport = new Airport(1);
      var plane = new Plane();
      airport.Land(plane);
      expect(function() { airport.Land(plane); } ).toThrow(new Error("Airport has reached capacity"))
    });
  });

  describe('take off', function() {
    it('instructs a plane to take off', function(){
      var airport = new Airport();
      var plane = new Plane();
      airport.Land(plane);
      airport.TakeOff(plane)
      expect(airport.apron.includes(plane)).toBe(false)
    });
  });
});