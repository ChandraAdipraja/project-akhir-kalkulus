import { Card, CardContent } from "~/components/ui/CardProfile";
import { TitleSection } from "~/components/ui/TitleSection";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "~/components/ui/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/Form";
import { Input } from "~/components/ui/Input";
import { Textarea } from "~/components/ui/TextArea";
import { FormEvent, useState } from "react";

import Swal from "sweetalert2";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  messages: z.string().min(10, {
    message: "Text must be at least 10 characters.",
  }),
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export const MessagePage = () => {
  interface ResponData {
    message: string;
    success: boolean;
  }
  // Move the useForm inside the component
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      messages: "",
    },
  });

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [messages, setmessages] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = {
      name,
      email,
      messages,
    };

    const response = await fetch("./api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const result = await Swal.fire({
      title: "Success",
      text: "Pesan berhasil terkirim!",
      icon: "success",
      confirmButtonText: "OK",
    });

    if (result.isConfirmed) {
      form.email = "";
      form.name = "";
      form.messages = "";
    }

    const res: ResponData = (await response.json()) as ResponData;
    console.log(res.message);
    console.log(res.success);

    setname("");
    setemail("");
    setmessages("");
  };

  return (
    <div className="mt-6 flex flex-col justify-center border-t-4 border-black bg-bg px-4">
      <TitleSection>Message</TitleSection>
      <h1 className="my-5 hidden text-center text-2xl font-bold uppercase text-text dark:text-darkText lg:block">
        Pesan
      </h1>
      <Card className="mb-10">
        <CardContent>
          <Form {...form}>
            <form
              className="space-y-8 text-start font-bold"
              onSubmit={handleSubmit}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Chandra"
                        {...field}
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="chandra@gmail.com"
                        {...field}
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        required
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="messages"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pesan</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Kirim Pesan Anda Disini"
                        {...field}
                        value={messages}
                        onChange={(e) => setmessages(e.target.value)}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" variant={"neutral"}>
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};
