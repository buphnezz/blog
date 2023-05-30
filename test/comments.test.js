const request = require('supertest');
const app = require('../server/server');

describe('GET /api/comments/:blogId', () => {
    it('responds with a list of comments for a specific blog', done => {
        request(app)
            .get('/api/comments/60c72b2f9f1b2c001f8e4d0a') // replace with a real blog ID
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('POST /api/comments/:blogId', () => {
    it('adds a new comment to a specific blog', done => {
        request(app)
            .post('/api/comments/60c72b2f9f1b2c001f8e4d0a') // replace with a real blog ID
            .send({ content: 'This is a test comment' })
            .expect('Content-Type', /json/)
            .expect(201, done);
    });
});
