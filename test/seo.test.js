const request = require('supertest');
const app = require('../server/server');

describe('POST /api/seo/optimize', () => {
    it('optimizes content for SEO', done => {
        request(app)
            .post('/api/seo/optimize')
            .send({ content: 'This is a test blog post' })
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
