import { useUsers } from "../hooks/use-users";

export function UserList() {
  const { users, isLoading } = useUsers();

  if (isLoading) {
    return <div>Carregando todos os usuários...</div>
  }

  return (
    <ul>
      {users.map((user) => <li key={user.id}>Nome: {user.name} | Username: {user.id}</li>)}
    </ul>
  )
}