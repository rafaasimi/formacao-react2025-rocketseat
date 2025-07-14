import { useCallback, useState } from "react";
import { api, fetcher } from "../helpers/api";
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

  async function createUser(payload: User) {
    try {
      setRequestStatus("saving");
      await api("/users", { method: "POST", body: JSON.stringify(payload) });
      alert("Usuário criado com sucesso");
    } catch (e) {
      console.log(e);
      alert("Erro ao criar usuário");
    } finally {
      setRequestStatus("idle");
    }
  }

  return { user, requestStatus, getUser, createUser };
}
