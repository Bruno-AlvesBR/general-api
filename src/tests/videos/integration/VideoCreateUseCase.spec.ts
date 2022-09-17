import 'reflect-metadata';
import request from 'supertest';

import app from '../../../index';

describe('Video Create Use Case - Integration tests', () => {
  it('Should be able to post on request to create video', async () => {
    const sla = {
      id: 'test',
      title: 'test',
      description: 'test',
      rating: 5,
      duration: 5,
      file: {
        image: 'test',
        type: 'test',
        url: 'test',
      },
    };

    const { status, body } = await request(app)
      .get('/videos')
      .set('Content-Type', 'application/json')
      .send('');

    expect(status).toBe(201);

    expect(body?.id).toBeDefined();
    expect(body?.title).toBeDefined();
    expect(body?.description).toBeDefined();
    expect(body?.duration).toBeUndefined();
    expect(body?.file?.image).toBeDefined();
    expect(body?.file?.type).toBeDefined();
    expect(body?.file?.url).toBeDefined();
    expect(body?.rating).toBeDefined();
  });
});
