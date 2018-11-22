describe("ScratchPad", function() {
    var ScratchPad = require('../../lib/JavascriptScratchPad/ScratchPad');
    var scratchPad;
 
    beforeEach(function() {
        scratchPad = new ScratchPad();
    });
  
    it("add two numbers", function() {
      var result = scratchPad.addNumbers(1,2);
      expect(result).toBe(3);
    });
  
  });
  