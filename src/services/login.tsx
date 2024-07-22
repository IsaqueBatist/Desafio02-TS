import { api } from "../api"
import { IUserData } from "../components/card/type"

export const login = async (email: string): Promise<void> => {
  const data = await api as IUserData
  if (data.email !== email) return alert('Email inválido')
  alert(`Bem vindo ${email}`)
}