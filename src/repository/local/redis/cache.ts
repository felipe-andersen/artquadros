const Redis = require("ioredis");

const fetch = async <T>(key: string, fetcher: () => T, expires: number) => {
  const existing = await get<T>(key);
  if (existing !== null) return existing;
  return set(key, fetcher, expires);
};

const get = async <T>(key: string): Promise<T> => {
  const value = await Redis.get(key);
  if (value === null) return value;
  return JSON.parse(value);
};

const set = async <T>(key: string, fetcher: () => T, expires: number) => {
  const value = await fetcher();  

  await Redis.set(key, JSON.stringify(value), "EX", expires);
  return value;
};

const del = async (key: string) => {
  await Redis.del(key);
};

export default { fetch, set, get, del };