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

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { TicketTypeInsert } from "@/supabase/functions/common/schema"
import { useAuth } from "@clerk/nextjs"
import { useUserStore } from "@/utils/store"
import {
  insertFromClerkToMyDb,
  checkUserModifiedDepartment,
} from "@/utils/helpers"

const departments = [
  "main office",
  "engineering",
  "design",
  "marketing",
  "financial",
]
const formSchema = z.object({
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  department: z.enum(
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
      department: "main office",
      description: "",
      title: "",
    },
  })
  const {
    formState: { isSubmitting },
  } = form
  const { toast } = useToast()
  const { userId } = useAuth()
  const user = useUserStore((state) => state.User)

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const userIsInMyDb = user.length
      if (!userIsInMyDb) {
        await insertFromClerkToMyDb(userId as string)
      }

      const data = formSchema.parse(values)
      // const res = await axios.post("/api/maketicket", { ...data, user_id })
      // console.log(res)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      form.reset()
      if (setOpen) setOpen(false)
      toast({
        description: "Your ticket successfully submitted!",
        className: "bg-green-600 text-lg font-semibold text-foreground",
      })
    } catch (err) {
      toast({
        description: "Your ticket didn't submitted try again!",
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
        <FormField
          control={form.control}
          name="department"
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
        <div className="flex w-full">
          <Button
            className={`mx-auto block disabled:cursor-not-allowed`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </form>
    </Form>
  )
}
