/*
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
)

interface FileMetadata {
  url: string
}
const insertToBucket = async () => {
  const { data, error } = await supabase.storage
    .from("quantom-byte")
    .upload(`path/to/your/file/${file.name}`, file)
}

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const file = formData.get("file") as File

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 })
  }

  // Upload the file to Supabase
  

  if (error) {
    console.error("File upload error:", error)
    return NextResponse.json({ error: "File upload failed" }, { status: 500 })
  }

  const fileUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/${data.Key}`

  // Save the file metadata to the database
  const fileData: FileMetadata = {
   
    url: fileUrl,
   
  }

  const result = await db.insert(files).values(fileData).returning("*")

  return NextResponse.json({ file: result[0] })
}
*/
