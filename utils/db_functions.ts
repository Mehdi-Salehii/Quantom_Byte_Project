import {
  ticketTable,
  TicketType,
  TicketTypeInsert,
  userTable,
  UserType,
  UserTypeInsert,
} from "@/supabase/functions/common/schema"
import { db } from "@/utils/db"
import { eq, sql } from "drizzle-orm"
import { revalidatePath } from "next/cache"

export const getAllTickets = async (userid: string): Promise<TicketType[]> => {
  const data = await db
    .select()
    .from(ticketTable)
    .where(eq(ticketTable.user_id, userid))

  return data
}
export const getOneTicket = async (ticketId: string) => {
  const data = await db
    .select()
    .from(ticketTable)
    .where(eq(ticketTable.id, ticketId))
  return data
}
export const getFilteredTicket = async (
  title: string,
  userId: string,
  description: string,
) => {
  const data = await db
    .select()
    .from(ticketTable)
    .where(
      sql`${ticketTable.title} = ${title} and ${ticketTable.description} = ${description} and ${ticketTable.user_id} = ${userId}`,
    )
  return data
}

export const insertTicket = async (ticket: TicketTypeInsert) => {
  const data = await db.insert(ticketTable).values(ticket).returning()
  return data
}
export const getUser = async (user_id: string) => {
  const data = await db
    .select()
    .from(userTable)
    .where(eq(userTable.clerk_id, user_id))

  return data
}
export const insertUser = async (user: UserTypeInsert) => {
  const data = await db.insert(userTable).values(user).returning()
  return data
}
export const updateUser = async (user: Partial<UserType>, clerkId: string) => {
  const data = await db.transaction(async (tx) => {
    await tx
      .update(userTable)
      .set({ ...user, updated_at: new Date(), user_updated_profile: true })
      .where(eq(userTable.clerk_id, clerkId))

    const updatedUser = await tx
      .select()
      .from(userTable)
      .where(eq(userTable.clerk_id, clerkId))
    return updatedUser
  })
  return data
}
