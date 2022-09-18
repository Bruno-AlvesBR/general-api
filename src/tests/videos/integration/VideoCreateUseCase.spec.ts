import { IVideoProps } from '@domain/videos/entities';
import 'reflect-metadata';
import request from 'supertest';

import app from '../../../app';

describe('Video Create Use Case - Integration tests', () => {
  const video: IVideoProps = {
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

  it('Should be able to create a new video', async () => {
    const { status, body } = await request(app)
      .post('/videos/create')
      .set('Content-Type', 'application/json')
      .send(video);

    expect(status).toBe(201);

    expect(body?.id).toBeDefined();
    expect(body?.title).toBeDefined();
    expect(body?.description).toBeDefined();
    expect(body?.file).toBeDefined();
    expect(body?.rating).toBeDefined();
    expect(body?.duration).toBeDefined();
  });

  it('Should not be able to create a new video', async () => {
    const { body } = await request(app)
      .post('/videos/create')
      .set('Content-Type', 'application/json')
      .send('');

    expect(body?.title).toBeUndefined();
    expect(body?.description).toBeUndefined();
    expect(body?.file?.image).toBeUndefined();
    expect(body?.file?.url).toBeUndefined();
    expect(body?.file?.type).toBeUndefined();
    expect(body?.rating).toBeUndefined();
    expect(body?.duration).toBeUndefined();
  });
});
