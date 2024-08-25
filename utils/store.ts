import { UserType } from "@/supabase/functions/common/schema"
import { create } from "zustand"
import { getUser } from "./db_functions"

type Action = {
  setUser: (user: UserType[]) => void
}
type State = {
  User: UserType[]
  UserModifiedDepartment: boolean
}

export const useUserStore = create<State & Action>((set) => ({
  User: [],
  UserModifiedDepartment: false,
  setUser: (user) => {
    set(() => ({ User: user }))
  },
}))
