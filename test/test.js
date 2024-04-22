import { RestaurantLogin } from "../database";
var assert = require('assert');

describe('', function () {
  it('Should return restaurant id if successful', function () {
    var dblogin = RestaurantLogin(1)
    assert.equal(dblogin, -1);
  });
});
