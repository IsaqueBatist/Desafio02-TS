import { api } from "../api"
import { IUserData } from "../components/card/type"


export const login = async (email: string): Promise<boolean> => {
  const data = await api as IUserData

  if (data.email !== email) return false


  return true


}