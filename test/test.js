'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require("../app");
var should = chai.should();

chai.use(chaiHttp);


describe('Demo Test for GET Endpoint', function() {
    it('should be able to ping the /GET and get 200 response', function(done) {
        chai.request(app)
            .get('/')
            .end(function(err, res){
                res.should.have.status(200);
                done();
            });
    });

});