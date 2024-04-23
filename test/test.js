var assert = require('assert');
const {DatabaseTests} = require('./database');


async function getFoo() {
  return await new DatabaseTests().runTest1(1)
}


describe('#GetCustomer(1)', () => {
  it('Resolves with customer id', () => {
    return getFoo().then(result => {
      assert.equal(result.id, 1)
    })
  })
})
