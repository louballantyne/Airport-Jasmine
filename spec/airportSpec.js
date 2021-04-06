describe('Airport', function() {
  describe('land', function() {
    it('instructs a plane to land', function() {
      var airport = new Airport();
      var plane = new Plane();
      airport.Land(plane);
      expect(airport.apron.includes(plane)).toBe(true)
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