const assert = require('assert');
const User = require('../src/user');

describe('Update a user',()=>{
  "use strict";
  let joe;
  beforeEach((done)=>{
    joe = new User({name:'Joe'})
    joe.save()
      .then(()=> done());
  });

  function assertName(operation,done){
    operation
      .then(()=> User.find({}))
      .then((users)=>{
        assert(users.length===1);
        assert(users[0].name==='Alex');
        done();
      });

  }

  it('set and save instance',(done)=>{
    joe.set('name','Alex');
    assertName(joe.save(),done);


  });

  it('instance based update',(done)=>{
    assertName(joe.update({ name:'Alex'}),done);
  });

  it('class based update',(done)=>{
    assertName(
      User.update({name : 'Joe'}, {name: "Alex"}),
      done
    );
  });

  it('class based findone update',(done)=>{
    assertName(
      User.findOneAndUpdate({name : 'Joe'}, {name: "Alex"}),
      done
    );
  });

  it('class based findid update',(done)=>{
    assertName(
      User.findByIdAndUpdate(joe._id, {name: "Alex"}),
      done
    );
  });




});
