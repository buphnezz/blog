const request = require('supertest');
const app = require('../server/server');

describe('POST /api/deployment/deploy', () => {
    it('deploys the project', done => {
        request(app)
            .post('/api/deployment/deploy')
            .send({ projectPath: './path/to/project' }) // replace with a real project path
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});
