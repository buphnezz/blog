const request = require('supertest');
const app = require('../server/server');

describe('GET /api/categories', () => {
    it('responds with a list of blog categories', done => {
        request(app)
            .get('/api/categories')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
