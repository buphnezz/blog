const request = require('supertest');
const app = require('../server/server');

describe('POST /api/vectorDb/query', () => {
    it('queries the vector database', done => {
        request(app)
            .post('/api/vectorDb/query')
            .send({ vector: [1, 2, 3, 4, 5] }) // replace with a real vector
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
