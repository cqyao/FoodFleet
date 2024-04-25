var assert = require('assert');
const {DatabaseTests} = require('./database');


async function getCustomer() {
  return await new DatabaseTests().runTest1(1)
}

async function getRestaurant() {
  return await new DatabaseTests().runTest2(1)
}


describe('#GetCustomer(1)', () => {
  it('Resolves with customer id', () => {
    return getCustomer().then(result => {
      assert.equal(result.id, 1)
    })
  })
})


describe('#GetRestaurant(1)', () => {
  it('Resolves with restaurant id', () => {
    return getRestaurant().then(result => {
      assert.equal(result.id, 1)
    })
  })
})
