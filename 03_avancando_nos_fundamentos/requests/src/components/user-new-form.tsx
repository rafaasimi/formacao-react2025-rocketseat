import { useRef } from "react"
import { useUser } from "../hooks/use-user";
import type { User } from "../models/user";

export function UserNewForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { createUser, requestStatus } = useUser()

  async function handleCreateNewUser(event: React.FormEvent) {

    if (!formRef.current) {
      return
    }

    const data = new FormData(formRef.current)

    const payload = {
      id: data.get('id'),
      name: data.get('name')
    }

    await createUser(payload as User);

    event.preventDefault()
  }

  return (
    <form ref={formRef} onSubmit={handleCreateNewUser}>
      <div>
        <input type="text" placeholder="Username" name="id" required />
      </div>
      <div>
        <input type="text" placeholder="Nome" name="name" required />
      </div>
      <div>
        <button type="submit">{requestStatus === 'saving' ? 'Criando...' : 'Criar usuário'}</button>
      </div>
    </form>
  )
}