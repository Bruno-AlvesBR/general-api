import Redis from 'ioredis';

const redisClient = new Redis();

const redis = {
  set: async (key: string, value: string) => {
    try {
      await redisClient.set(key, value);
    } catch (err) {
      throw new Error('Error on save this content on redis');
    }
  },

  get: async (value: string) => {
    try {
      const syncRedisGet = await redisClient.get(value);

      const cacheContent = syncRedisGet
        ? JSON.parse(syncRedisGet)
        : '';

      return cacheContent;
    } catch (err) {
      console.error(err);
      return '';
    }
  },
};

export { redisClient, redis };
