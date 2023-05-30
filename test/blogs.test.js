const request = require('supertest');
const app = require('../server/server');

describe('GET /api/blogs/trending', () => {
    it('responds with a list of trending blogs', done => {
        request(app)
            .get('/api/blogs/trending')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
