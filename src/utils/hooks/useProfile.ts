import { useEffect, useState } from "react";
import client from "../redisClient";
import { z } from "zod";

const schema = z.object({
  username: z.string(),
  website: z.string().url(),
  avatarUrl: z.string().url(),
});

type Profile = z.infer<typeof schema>;

export function useProfile() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const profile = await client.hgetall("profile");
        const parsed = schema.safeParse(profile);

        if (!parsed.success) {
          console.error(
            "❌ Invalid profile object:",
            JSON.stringify(parsed.error.format(), null, 4)
          );
        }
        if (parsed.success) setProfile(parsed.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { loading, error, profile };
}
