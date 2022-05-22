import { Request, Response } from 'express';

import { PodcastPresentation } from '../presentation/PodcastPresentation';

export class PodcastController {
  public async register(
    request: Request,
    response: Response
  ): Promise<Response<IPodcastProps>> {
    const {
      id,
      title,
      description,
      members,
      thumbnail,
      url,
      type,
      duration,
    } = request.body;

    const podcastPresentation = new PodcastPresentation();

    try {
      const createPodcast =
        await podcastPresentation.register({
          id,
          title,
          description,
          members,
          thumbnail,
          file: {
            url,
            type,
            duration,
          },
        });

      if (!createPodcast) {
        return response
          .status(400)
          .json('Cannot create a new podcast');
      }

      return response.status(200).json(createPodcast);
    } catch (err) {
      return response.status(401).json(err);
    }
  }

  public async findAll(
    request: Request,
    response: Response
  ): Promise<Response<IPodcastProps>> {
    const podcastPresentation = new PodcastPresentation();

    try {
      const findAllPodcasts =
        await podcastPresentation.findAll();

      if (!findAllPodcasts) {
        return response
          .status(402)
          .json('Cannot find all podcasts');
      }

      return response.status(200).json(findAllPodcasts);
    } catch (err) {
      return response.status(402).json(err);
    }
  }

  public async findById(
    request: Request,
    response: Response
  ): Promise<Response<IPodcastProps>> {
    const { id } = request.params;

    const podcastPresentation = new PodcastPresentation();

    try {
      const findPodcast =
        await podcastPresentation.findById({ id });

      if (!findPodcast) {
        return response
          .status(400)
          .json('Cannot finded podcast by id on database');
      }

      return response.status(200).json(findPodcast);
    } catch (err) {
      return response.status(4002).json(err);
    }
  }
}
