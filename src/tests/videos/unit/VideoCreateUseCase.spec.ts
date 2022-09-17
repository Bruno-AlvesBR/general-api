import 'reflect-metadata';

import VideoCreateUseCase from '../../../domain/videos/useCases/VideoCreateUseCase';
import FakerVideoProvider from '../../../database/providers/fakes/FakerVideoProvider';

let fakerVideoProvider: FakerVideoProvider;
let videoCreateUseCase: VideoCreateUseCase;

describe('Video Create Use Case - Unit tests', () => {
  beforeAll(() => {
    jest.clearAllMocks();
    fakerVideoProvider = new FakerVideoProvider();
    videoCreateUseCase = new VideoCreateUseCase(fakerVideoProvider);
  });

  const video = [
    {
      id: 'video-1',
      title: 'video-1',
      description: 'video-1',
      duration: 20,
      file: {
        image: 'video-1',
        type: 'video-1',
        url: 'video-1',
      },
      rating: 5,
    },
  ];

  it('Should be able to return user after create', async () => {
    const videoResponse = await videoCreateUseCase.execute(video[0]);

    expect(String(videoResponse)?.length).toBeGreaterThan(0);

    expect(videoResponse?.id).toBeDefined();
    expect(videoResponse?.title).toBeDefined();
    expect(videoResponse?.duration).toBeDefined();
    expect(videoResponse?.description).toBeDefined();
    expect(videoResponse?.file?.image).toBeDefined();
    expect(videoResponse?.file?.type).toBeDefined();
    expect(videoResponse?.file?.url).toBeDefined();
    expect(videoResponse?.rating).toBeDefined();
  });

  it('Should not be able to return user after create', async () => {
    const videoResponse = await videoCreateUseCase.execute();

    expect(videoResponse?.id).toBeUndefined();
    expect(videoResponse?.title).toBeUndefined();
    expect(videoResponse?.duration).toBeUndefined();
    expect(videoResponse?.description).toBeUndefined();
    expect(videoResponse?.file?.image).toBeUndefined();
    expect(videoResponse?.file?.type).toBeUndefined();
    expect(videoResponse?.file?.url).toBeUndefined();
    expect(videoResponse?.rating).toBeUndefined();
  });
});
