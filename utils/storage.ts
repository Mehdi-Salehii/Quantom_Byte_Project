import { useAuth } from "@clerk/nextjs"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
)
export async function uploadFile(file: File, userId: string) {
  const fileExt = file.name.split(".").pop()
  const fileName = `${Date.now()}.${fileExt}`
  const filePath = `${userId}/${fileName}`

  const { data, error } = await supabase.storage
    .from("quantom-byte")
    .upload(filePath, file)

  if (error) {
    throw new Error(`Failed to upload file: ${error.message}`)
  }

  return data.path
}
