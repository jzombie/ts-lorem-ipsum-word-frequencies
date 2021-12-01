import request from 'supertest';
import routes from '../src/routes';
import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
app.use('/', routes);

describe('word input parser', () => {
  it('parses mock input text with 3 result expectations', (done) => {
    const mockBuffer = fs.readFileSync(
      path.resolve(__dirname, 'mocks/mock-input.txt')
    );

    request(app)
      .post('/word-count?n=3')
      .attach('file1', mockBuffer)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          throw err;
        }

        const resultData = JSON.parse(res.text);

        expect(resultData).toEqual({
          frequencies: [
            { word: 'sed', count: 12 },
            { word: 'id', count: 10 },
            { word: 'sit', count: 8 }
          ]
        });

        done();
      });
  });

  it('parses mock input text with 10 result expectations', (done) => {
    const mockBuffer = fs.readFileSync(
      path.resolve(__dirname, 'mocks/mock-input.txt')
    );

    request(app)
      .post('/word-count?n=10')
      .attach('file1', mockBuffer)
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) {
          throw err;
        }

        const resultData = JSON.parse(res.text);

        expect(resultData).toEqual({
          frequencies: [
            {
              word: 'sed',
              count: 12
            },
            {
              word: 'id',
              count: 10
            },
            {
              word: 'sit',
              count: 8
            },
            {
              word: 'amet',
              count: 8
            },
            {
              word: 'ut',
              count: 8
            },
            {
              word: 'lorem',
              count: 7
            },
            {
              word: 'in',
              count: 7
            },
            {
              word: 'at',
              count: 7
            },
            {
              word: 'ac',
              count: 7
            },
            {
              word: 'magna',
              count: 7
            }
          ]
        });

        done();
      });
  });
});
