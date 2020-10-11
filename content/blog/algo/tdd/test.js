
var assert = require('assert');

var maxArea = require('./problems/max_area');

// console.log(maxArea.toString());
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });

    it('sshould return -1 when the value is not present', function () {
      var area = maxArea([1,1]);
      assert.equal(2, area);
    });

  });
});