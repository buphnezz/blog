const request = require('supertest');
const app = require('../server/server');

describe('POST /api/auth/register', () => {
    it('registers a new user', done => {
        request(app)
            .post('/api/auth/register')
            .send({ name: 'Test User', email: 'test@example.com', password: 'password' })
            .expect('Content-Type', /json/)
            .expect(201, done);
    });
});

describe('POST /api/auth/login', () => {
    it('logs in a user', done => {
        request(app)
            .post('/api/auth/login')
            .send({ email: 'test@example.com', password: 'password' })
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
