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
}

export function UpdateUserForm({ setOpen }: UpdateUserFormProps) {
  const { userId } = useAuth()
  const user = useUserStore((state) => state.User)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      user_department: "main office",
    },
  })
  const { isSubmitting } = form.formState

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await axios.put(`/api/user?id=${userId}`, { ...values, clerk_id: userId })

      toast({
        description: "Your profile has been successfully updated!",
        className: "bg-green-600 text-lg font-semibold text-foreground",
      })

      if (setOpen) setOpen(false)
    } catch (err) {
      toast({
        description: "Failed to update profile. Please try again!",
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
