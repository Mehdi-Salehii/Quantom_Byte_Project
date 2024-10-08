"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useToast } from "@/components/ui/use-toast"
import axios from "axios"

import { useAuth } from "@clerk/nextjs"
import { useUserStore } from "@/utils/store"
import { UserType } from "@/supabase/functions/common/schema"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { revalidatePath } from "next/cache"
import { Textarea } from "./ui/textarea"
import { useState } from "react"

const departments = [
  "main office",
  "engineering",
  "design",
  "marketing",
  "financial",
]

const formSchema = z.object({
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

type UpdateUserFormProps = {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>

  id: string
}

export default function ManageTicketForm({ id }: UpdateUserFormProps) {
  const { userId } = useAuth()
  const [status, setStatus] = useState("")
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  })
  const { isSubmitting } = form.formState

  const queryClient = useQueryClient()
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const ticketStatus = await axios
        .put(`/api/ticket/${id}`, {
          ...(status === "fulfilled"
            ? { fulfill_message: values.message, reject_message: null }
            : { reject_message: values.message, fulfill_message: null }),
          status: status,
        })
        .then((res) => {
          if (typeof res.data === "string") throw new Error("unsuccessful!")
        })
      queryClient.invalidateQueries({
        queryKey: ["ticket-details"],
      })
      queryClient.invalidateQueries({
        queryKey: ["recieved-tickets"],
      })
      queryClient.invalidateQueries({
        queryKey: ["sent-tickets"],
      })

      toast({
        description: "Your respnse successfully has been submitted!",
        className: "bg-green-600 text-lg font-semibold text-foreground",
      })
    } catch (err) {
      console.error(err)
      toast({
        description: `Failed to submit your response. Please try again! ${err}`,
        className: "bg-red-600 text-lg font-semibold text-foreground",
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="mx-auto">Message</FormLabel>
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

        <div className="flex w-full justify-center space-x-3">
          <button
            onClick={() => setStatus("fulfilled")}
            disabled={isSubmitting}
            className={`block rounded bg-green-500 p-0 px-2 py-1 text-sm font-normal text-background disabled:cursor-not-allowed`}
            type="submit"
          >
            {isSubmitting && status === "fulfilled"
              ? "Submitting..."
              : "Fulfill"}
          </button>
          <button
            onClick={() => setStatus("rejected")}
            disabled={isSubmitting}
            className={`block rounded bg-red-500 p-0 px-2 py-1 text-sm font-normal text-background disabled:cursor-not-allowed`}
            type="submit"
          >
            {isSubmitting && status === "rejected" ? "Submitting..." : "Reject"}
          </button>
        </div>
      </form>
    </Form>
  )
}
