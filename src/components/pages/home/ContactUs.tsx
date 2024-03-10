"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useTranslations } from "next-intl";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  surname: z.string().min(2, {
    message: "surname must be at least 2 characters.",
  }),
  phoneNumber: z
    .string({
      required_error: "Please enter a valid phone number",
    })
    .min(11, {
      message: "Please enter a valid phone number",
    }),
  email: z.string().email({
    message: "please enter a valid email address",
  }),
  message: z.string().min(20, {
    message: "message must be at least 20 characters.",
  }),
});

const ContactUs = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      surname: "",
      phoneNumber: "",
      email: "",
      message: "",
    },
  });
  const { toast } = useToast();
  const t = useTranslations("contact");

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }
  return (
    <section
      id="contacts"
      className=" bg-light-gray px-2 lg:px-0 py-12 lg:py-16"
    >
      <div className=" relative overflow-hidden rounded-[16px] space-y-12 container max-w-[1024px] bg-purple py-16 px-4 lg:px-20">
        <div className=" relative z-20  max-w-[549px] mx-auto space-y-2">
          <h2 className=" text-4xl text-center font-bold text-white">
            {t("title")}
          </h2>
          <p className=" text-wrap text-center text-lg leading-6 font-medium text-light_purple">
            {t("description")}
          </p>
        </div>
        <div className=" relative z-20 space-y-12">
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className=" space-y-3"
              >
                <div className=" grid sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className=" space-y-1">
                        <FormLabel className=" text-sm font-normal text-white">
                          {t("field1")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            className=" w-full"
                            placeholder="name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="surname"
                    render={({ field }) => (
                      <FormItem className=" space-y-1">
                        <FormLabel className=" text-sm font-normal text-white">
                          {t("field2")}
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="surname" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className=" grid sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem className=" space-y-1">
                        <FormLabel className=" text-sm font-normal text-white">
                          {t("field3")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            className=" w-full"
                            placeholder="phoneNumber"
                            {...field}
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
                      <FormItem className=" space-y-1">
                        <FormLabel className=" text-sm font-normal text-white">
                          {t("field4")}
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="name@email.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className=" space-y-1">
                      <FormLabel className=" text-sm font-normal text-white">
                        {t("field5")}
                      </FormLabel>
                      <FormControl>
                        <Textarea placeholder="cu cuvintele tale" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex pt-11 justify-center">
                  <Button
                    className=" bg-white text-black hover:bg-white/85"
                    size={"lg"}
                    type="submit"
                  >
                    {t("btnText")}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={201}
          height={132}
          viewBox="0 0 201 132"
          fill="none"
          className=" z-10 absolute left-0 top-[-8%]"
        >
          <circle cx={78} cy={9} r={123} fill="url(#paint0_linear_1_2736)" />
          <defs>
            <linearGradient
              id="paint0_linear_1_2736"
              x1={78}
              y1={-114}
              x2={78}
              y2={132}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DE6CFA" />
              <stop offset={1} stopColor="#9B51E0" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={246}
          height={67}
          viewBox="0 0 246 67"
          fill="none"
          className=" absolute bottom-0 -right-[10%] z-10"
        >
          <circle
            cx={123}
            cy={123}
            r={123}
            transform="rotate(180 123 123)"
            fill="url(#paint0_linear_1_2486)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_2486"
              x1={123}
              y1="7.62939e-06"
              x2={123}
              y2={246}
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DE6CFA" />
              <stop offset={1} stopColor="#9B51E0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default ContactUs;
