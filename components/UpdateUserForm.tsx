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

const departments = [
  "main office",
  "engineering",
  "design",
  "marketing",
  "financial",
]

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  user_department: z.enum(
    ["main office", "engineering", "design", "marketing", "financial"],
    { message: "Invalid department." },
  ),
})

type UpdateUserFormProps = {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
  isFetching: boolean
  user: UserType[]
}

export default function UpdateUserForm({
  setOpen,
  isFetching,
  user,
}: UpdateUserFormProps) {
  const setUser = useUserStore((state) => state.setUser)
  const { userId } = useAuth()

  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      user_department: "main office",
    },
  })
  const { isSubmitting } = form.formState

 

  const queryClient = useQueryClient()
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      let isToast = 0
      if (!user) throw new Error("Server Error Fetching User Unsuccessful")
      if (!user?.length) {
        const { data: insertedUser } = await axios.post("/api/user", {
          ...values,
          clerk_id: userId,
          user_updated_profile: true,
        })
       
        queryClient.invalidateQueries({ queryKey: ["user"] })
        
        isToast = 1
      } else {
        const updatedUser = await axios
          .put(`/api/user?id=${userId}`, {
            ...values,
            clerk_id: userId,
          })
          .then((res) => {
            if (typeof res.data === "string") throw new Error("unsuccessful!")
          })
        queryClient.invalidateQueries({ queryKey: ["user"] })

        isToast = 1
      }

      !!isToast &&
        toast({
          description: "Your profile has been successfully updated!",
          className: "bg-green-600 text-lg font-semibold text-foreground",
        })
      if (setOpen) setOpen(false)
    } catch (err) {
      console.error(err)
      toast({
        description: `Failed to update profile. Please try again! ${err}`,
        className: "bg-red-600 text-lg font-semibold text-foreground",
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  className="placeholder:italic placeholder:text-border"
                  placeholder="Enter your name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="user_department"
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

        <div className="flex w-full">
          <Button
            disabled={isSubmitting}
            className={`mx-auto block disabled:cursor-not-allowed`}
            type="submit"
          >
            {isSubmitting ? "Submitting..." : "Update Profile"}
          </Button>
        </div>
      </form>
    </Form>
  )
}
