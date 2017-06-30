const assert = require('assert');
const User = require('../src/user');

describe('Reading Users out of database',()=>{
  "use strict";
  let joe;
  beforeEach((done)=>{
    joe = new User({ name: 'Joe'});
    joe.save()
    .then(()=> done());
  });
  it('finds all users with name joe',(done)=>{
    User.find({name: 'Joe'})
    .then((users)=>{
    assert(users[0]._id.toString() === joe._id.toString());
    done();
    });
  });
});
