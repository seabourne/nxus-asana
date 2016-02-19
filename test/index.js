/* 
* @Author: Mike Reich
* @Date:   2016-02-13 08:59:44
* @Last Modified 2016-02-19
*/

'use strict';

import Module from '../src/'

import TestApp from '@nxus/core/lib/test/support/TestApp';

describe("Module", () => {
  var module, app;
 
  beforeEach(() => {
    app = new TestApp();
    app.config = {'asana-api': {token: 'sometoken'}}
    module = new Module(app);
  });
  
  describe("Load", () => {
    it("should not be null", () => Module.should.not.be.null)

    it("should be instantiated", () => {
      module = new Module(app);
      module.should.not.be.null;
      module.client.should.not.be.null;
    });

    it("should throw if no ASANA token defined", () => {
      app = new TestApp();
      chai.expect(Module).to.throw(Error);
    })

    it("should register responders", () => {
      app.get.calledWith('asana-api').should.be.true;
      app.get('asana-api').respond.calledWith('tasks').should.be.true;
      app.get('asana-api').respond.calledWith('projects').should.be.true;
      app.get('asana-api').respond.calledWith('events').should.be.true;
      app.get('asana-api').respond.calledWith('users').should.be.true;
      app.get('asana-api').respond.calledWith('me').should.be.true;
      app.get('asana-api').respond.calledWith('stories').should.be.true;
      app.get('asana-api').respond.calledWith('workspaces').should.be.true;
      app.get('asana-api').respond.calledWith('teams').should.be.true;
      app.get('asana-api').respond.calledWith('attachments').should.be.true;
      app.get('asana-api').respond.calledWith('tags').should.be.true;
    })
  })
})