var chai = require("chai");
var expect = chai.expect;

var maxrectangle = require('../src/maxrectangle');

const charsequence = require('../src/charsequence');
describe("Test suit ", function() {

  // it("[3,2,5]", function() {
  //   var s = charsequence.longestCommonPrefix(["cir","car"]);
  //   expect(s).to.be.equal("c");
  // });

  // [1,3,2,1,2]  ==> 5
  //[4,2,0,3,2,5] ==> 6
  it("[1,3,2,1,2]", function() {
    var s = maxrectangle.largestRectangleArea([1,3,2,1,2]);
    expect(s).to.be.equal(5);
  });

  it("[3,2,5]", function() {
    var s = maxrectangle.largestRectangleArea([4,2,0,3,2,5]);
    expect(s).to.be.equal(6);
  });


  
  // it("should return sum of the numbers", function() {
  //   var s = maxrectangle.largestRectangleArea([0,0]);
  //   expect(s).to.be.equal(0);
  // });

  // it("should return sum of the numbers", function() {
  //   var s = maxrectangle.largestRectangleArea([1,1]);
  //   expect(s).to.be.equal(2);
  // });

  // it("should return sum of the numbers", function() {
  //   var s = maxrectangle.largestRectangleArea([2,1,5,6,2,3]);
  //   expect(s).to.be.equal(10);
  // });

  // it("should return sum of the numbers", function() {
  //   var s = maxrectangle.largestRectangleArea([1,2,3]);
  //   expect(s).to.be.equal(4);
  // });

  // it("should return sum of the numbers", function() {
  //   var s = maxrectangle.largestRectangleArea([1,2,3]);
  //   expect(s).to.be.equal(4);
  // });

  

});
