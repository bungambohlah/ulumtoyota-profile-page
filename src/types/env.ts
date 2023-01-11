import { TypeOf, z, ZodTypeAny } from "zod";

const withDevDefault = <T extends ZodTypeAny>(schema: T, val: TypeOf<T>) =>
  process.env["NODE_ENV"] !== "production" ? schema.default(val) : schema;

const schema = z.object({
  REDIS_URL: withDevDefault(
    z.string().url(),
    "rediss://root:pass@localhost:33706"
  ),
});

const parsed = schema.safeParse(process.env);

if (!parsed.success) {
  console.error(
    "❌ Invalid environment variables:",
    JSON.stringify(parsed.error.format(), null, 4)
  );
  process.exit(1);
}

export default parsed.data;
