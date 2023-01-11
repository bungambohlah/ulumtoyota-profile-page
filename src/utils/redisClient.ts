import Redis from "ioredis";
import env from "../types/env";

const client = new Redis(env.REDIS_URL);

export default client;
