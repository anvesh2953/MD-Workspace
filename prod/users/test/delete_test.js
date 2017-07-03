const assert = require('assert');
const User = require('../src/user');
describe('Delete a user',()=>{
  "use strict";
  let joe;
  beforeEach((done)=>{
    joe = new User({name : 'Joe'});
    joe.save()
    .then (()=>done());
  });

  it('model instance remove',(done)=>{
    joe.remove()
    .then(()=> User.findOne({name: 'Joe'}))
     .then((user)=>{
       assert(user===null);
       done();
     });
  });

  it('class method to remove',(done)=>{
    User.remove({name:'Joe'})
      .then(()=>User.findOne({ name: 'Joe'}))
      .then((user)=>{
        assert(user===null);
        done();
      })
  });

  it('class method findOneAndRemove',(done)=>{
    User.findOneAndRemove({ name:'Joe'})
      .then(()=>User.findOne({ name: 'Joe'}))
      .then((user)=>{
        assert(user===null);
        done();
      })
  });

  it('class method findByIdandRemove',(done)=>{
    User.findByIdAndRemove({ _id:joe._id})
      .then(()=>User.findOne({ name: 'Joe'}))
      .then((user)=>{
        assert(user===null);
        done();
      })
  });



});
