const request = require('supertest');
const mocha = require('mocha');
const express = require('express');
const assert = require('assert');
const app = require('../app.js');
const homeController = require('../controllers/homeController');
const postController = require('../controllers/postController');

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
	  it('GET / and responds with 200', function(done) {
		request(app)
	      .get('/')
	      .expect(200, done);
	  });
	});

	describe('GET wrong URL and responds with 404', function() {
	  it('GET wrong URL and responds with 404', function(done) {
		const postId = 4201;
		request(app)
				.get(`/${postId}/sdfj`)
	      .expect(404, done);
	  });
	});

	describe('GET /:postId and responds with 200', function() {
			it('GET /:postId and responds with 200', function(done) {
				const postId = 4202;
			request(app)
					.get(`/${postId}`)
					.expect(200, done);
			});
		});

		describe('GET /:postId/edit and responds with 200', function() {
			it('GET /:postId/edit and responds with 200', function(done) {
				const postId = 4202;
			request(app)
					.get(`/${postId}/edit`)
					.expect(200, done);
			});
		});

		describe('POST /:postId/delete and responds with 200', function() {
			it('POST /:postId/delete and responds with 200', function(done) {
				const postId = 4202;
			request(app)
					.post(`/${postId}/delete`)
					.expect(200, done);
			});
		});


});
