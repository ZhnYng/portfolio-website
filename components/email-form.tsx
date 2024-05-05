"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser";
import { z } from "zod"

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
import { Textarea } from "./ui/textarea"
import { useRef } from "react";
import { useToast } from "./ui/use-toast";
import { Loader2, Send } from "lucide-react";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(1, {
    message: "Message is required.",
  }),
})


export default function EmailForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast()
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        formRef.current || "",
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "",
          blockHeadless: true,
          limitRate: {
            throttle: 1000,
          }
        }
      )
      .then(() => {
        toast({
          title: "Email sent!",
          description: "Your email has been sent successfully! I will get back to you as soon as possible.",
          variant: "default"
        })
      }, (err) => {
        console.error(err)
        toast({
          title: "Email failed to send!",
          description: 
            <>
              Please try again later, or just email me at&nbsp;
              <Link 
                href="mailto:zzhenyyang@gmail.com" 
                className="font-bold"
              >
                zzhenyyang@gmail.com
              </Link>
            </>,
          variant: "destructive"
        })
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <Form {...form}>
      <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex gap-6 items-center flex-col md:flex-row w-full">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex-[1] w-full">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormDescription>
                  Just your name, please. 😊
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-[1] w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Your email" {...field} />
                </FormControl>
                <FormDescription>
                  And your email, so I can get back to you. 📧
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me more!"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Tell me more here. 📝
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end">
          <Button type="submit" className="flex gap-2 items-center">
            {form.formState.isSubmitting ?
              <Loader2 size={20} className="animate-spin"/>
              :
              <Send size={20} />
            }
            Send
          </Button>
        </div>
      </form>
    </Form>
  )
}
