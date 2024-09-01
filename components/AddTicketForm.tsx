"use client"
import axios from "axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

import { useAuth, useUser } from "@clerk/nextjs"

import { UserRoundPen } from "lucide-react"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useRef, useState } from "react"
import { uploadFile } from "@/utils/storage"

const departments = [
  "main office",
  "engineering",
  "design",
  "marketing",
  "financial",
]
const formSchema = z.object({
  file: z
    .instanceof(File)
    .optional()
    .refine((file) => {
      if (file) {
        return ["image/jpeg", "image/png", "image/jpg"].includes(file.type)
      } else {
        return true
      }
    }, "Only JPEG or PNG files are allowed")
    .refine((file) => {
      if (file) {
        return file.size <= 5 * 1024 * 1024
      } else {
        return true
      }
    }, "File size should be less than 5MB"),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  source_department: z.enum(
    ["main office", "engineering", "design", "marketing", "financial"],
    {
      message: "invalid department.",
    },
  ),
  target_department: z.enum(
    ["main office", "engineering", "design", "marketing", "financial"],
    {
      message: "invalid department.",
    },
  ),
})
type AddTicketFormProps = {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export function AddTicketForm({ setOpen }: AddTicketFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      source_department: "main office",
      target_department: "main office",
      description: "",
      title: "",
    },
  })
  const {
    formState: { isSubmitting },
  } = form
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const { toast } = useToast()
  const { userId } = useAuth()
  const { user: clerktest } = useUser()
  const [filteredDepartments, setFilteredDepartments] = useState(departments)
  const [uploading, setUploading] = useState(false)
  const firstName = clerktest?.fullName
  const { data: user, isFetching } = useQuery({
    queryKey: ["user"],

    queryFn: async () => {
      try {
        const { data } = await axios.get(`/api/user?id=${userId}`)
        const filtered = departments.filter(
          (dep) => dep !== data[0]?.user_department,
        )

        setFilteredDepartments(filtered)

        return data
      } catch (err) {
        console.error(err)
      }
    },

    enabled: !!userId,
  })

  const queryClient = useQueryClient()
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const data = formSchema.parse(values)
      const { source_department, file, ...ticketData } = data

      const userIsInMyDb = user?.length
      let fileUrl = ""
      if (file) {
        setUploading(true)
        const filePath = await uploadFile(file, userId as string)
        setUploading(false)
        fileUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/quantom-byte/${filePath}`
      }

      const ticketWithFile = {
        ...ticketData,
        pictures: fileUrl ? [fileUrl] : [],
        user_id: userId,
      }
      if (!userIsInMyDb) {
        await axios.post("/api/user", {
          clerk_id: userId,
          user_updated_profile: true,
          name: firstName,
          user_department: source_department,
        })
        queryClient.invalidateQueries({ queryKey: ["user"] })
      }

      if (typeof userId !== "string") throw new Error("userId invalid type")

      await axios.post("/api/maketicket", ticketWithFile)

      form.reset()
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
      queryClient.invalidateQueries({ queryKey: ["tickets-sent"] })
      if (setOpen) setOpen(false)
      toast({
        description: "Your ticket successfully submitted!",
        className: "bg-green-600 text-lg font-semibold text-foreground",
      })
    } catch (err) {
      console.error(err)
      toast({
        description: `Your ticket didn't submitted try again! ${err}`,
        className: "bg-red-600 text-lg font-semibold text-foreground",
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  className="placeholder:italic placeholder:text-border"
                  placeholder="eg. my windows is BROKEN"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        {!user?.[0]?.user_updated_profile && (
          <FormField
            control={form.control}
            name="source_department"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Department</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your department" />
                    </SelectTrigger>
                  </FormControl>
                  <FormDescription className="text-left">
                    &#9888; This department will be used for your next tickets
                    you can change it any time from
                    <UserRoundPen className="inline" width={50} height={20} />
                    in navigation
                  </FormDescription>
                  <SelectContent>
                    {departments.map((dep, i) => (
                      <SelectItem key={i} value={dep}>
                        {dep}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name="target_department"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Target Department</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select target department" />
                  </SelectTrigger>
                </FormControl>
                {
                  <SelectContent>
                    {filteredDepartments.map((dep, i) => (
                      <SelectItem key={i} value={dep}>
                        {dep}
                      </SelectItem>
                    ))}
                  </SelectContent>
                }
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe the issue "
                  className="fon- resize-none placeholder:italic placeholder:text-border"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  ref={(e) => {
                    field.ref(e)
                    fileInputRef.current = e
                  }}
                  onChange={(event) => {
                    const file = (event.target as HTMLInputElement).files?.[0]
                    field.onChange(file)
                  }}
                  type="file"
                  className="cursor-pointer"
                />
              </FormControl>

              <div
                className={`text-center text-sm ${uploading ? "text-green-500" : "text-slate-700/70"}`}
              >
                {uploading
                  ? "Uploading Picture..."
                  : "only JPEG,PNG,JPG up to 5MB"}
              </div>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full">
          <Button
            className={`mx-auto block disabled:cursor-not-allowed`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting && !uploading ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  )
}
