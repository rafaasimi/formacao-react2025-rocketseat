import { useEffect } from "react";
import { useUser } from "../hooks/use-user";

export function UserInfo() {
  const { user, requestStatus, getUser } = useUser()

  useEffect(() => {
    getUser('rafaasimi')
  }, [getUser])

  if (requestStatus === 'loading') {
    return <div>Carregando usuário...</div>
  }

  return (
    <ul>
      <li>Username: {user?.id}</li>
      <li>Nome: {user?.name}</li>
    </ul>
  )
}