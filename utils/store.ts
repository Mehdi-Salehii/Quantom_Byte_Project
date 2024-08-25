import { UserType } from "@/supabase/functions/common/schema"
import { create } from "zustand"

type Action = {
  setUser: (user: UserType[]) => void
}
type State = {
  User: UserType[]
  UserModified: boolean
}

export const useUserStore = create<State & Action>((set) => ({
  User: [],
  UserModified: false,
  setUser: (user) => {
    set(() => ({ User: user }))
  },
  setUserModified: (usermodified: boolean) => {
    set(() => ({ UserModified: usermodified }))
  },
}))
