const request = require('supertest');
const app = require('../server/server');

describe('POST /api/ai/interact', () => {
    it('gets a response from the AI', done => {
        request(app)
            .post('/api/ai/interact')
            .send({ prompt: 'Hello, AI!' })
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
