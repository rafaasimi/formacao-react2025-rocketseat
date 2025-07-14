import { useCallback, useState } from "react";
import { fetcher } from "../helpers/api";
import type { User } from "../models/user";

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [requestStatus, setRequestStatus] = useState<
    "idle" | "loading" | "saving"
  >("idle");

  const getUser = useCallback(async (username: string) => {
    try {
      setRequestStatus("loading");

      const data = await fetcher(`/users/${username}`);

      setUser(data);
    } catch (e) {
      console.error(e);
      alert("Erro ao buscar usuario");
    } finally {
      setRequestStatus("idle");
    }
  }, []);

  return { user, requestStatus, getUser };
}
