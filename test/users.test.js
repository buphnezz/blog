const request = require('supertest');
const app = require('../server/server');

describe('GET /api/users/:userId', () => {
    it('responds with a specific user', done => {
        request(app)
            .get('/api/users/60c72b2f9f1b2c001f8e4d0a') // replace with a real user ID
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('PUT /api/users/:userId', () => {
    it('updates a specific user', done => {
        request(app)
            .put('/api/users/60c72b2f9f1b2c001f8e4d0a') // replace with a real user ID
            .send({ name: 'Updated Name' })
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
