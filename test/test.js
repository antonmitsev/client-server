var assert = require('assert');
var db = require('../client/src/DB.js');

beforeEach(async function() {
  await db.clear();
  await db.save({
    type: 'User', 
    data: ['tobi', 'loki', 'jane']
  });
});

describe('#find()', function() {
  it('responds with matching records', async function() {
    const users = await db.find({ type: 'User' });
    assert.equal(users.length, 3);
  });
});

describe('Array', function() {
  describe('#indexOf()', function() {
    
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });

    it('double done', function(done) {
      // Calling `done()` twice is an error
      done();
    });
  });
});

describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      var user = new User('Luna');
      user.save(function(err) {
        if (err) done(err);
        else done();
      });
    });

    it('should save directly without error', function(done) {
      var user = new User('Luna');
      user.save(done);
    });
  });
  
  describe('#save2()', function() {
    it('should complete this test with a Promise', function (done) {
      var p = new Promise(function (resolve) {
        assert.ok(true);
        resolve();
      });
      
      p.then(done);
    });
  });
   
});







