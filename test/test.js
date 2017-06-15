const request = require('supertest');
const mocha = require('mocha');
const express = require('express');
const assert = require('assert');
const app = require('../app.js');
const readController = require('../controllers/readController');

// const app = express();


describe('Helpers', function() {
  describe('Current year', function() {
    it('Returns 2017 in 2017', function() {
      const year = new Date().getFullYear();
      assert.equal(year, 2017);
    });
  });
});

describe('Routes', function() {
	describe('GET /', function() {
	  it('responds with 200', function(done) {
		request(app)
	      .get('/')
	      .expect(200, done);
	  });
	});

	describe('GET /asdfr', function() {
	  it('responds with 404', function(done) {
		request(app)
	      .get('/asdfr')
	      .expect(404, done);
	  });
	});
});
