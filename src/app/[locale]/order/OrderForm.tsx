"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useTranslations } from "next-intl";
import Image from "next/image";
const translationTypes = [
  {
    id: "authorized",
    label: "authorized",
  },
  {
    id: "legalized",
    label: "legalized",
  },
  {
    id: "interepretation",
    label: "interepretation",
  },
] as const;
const entityTypesItems = [
  {
    id: "natural_person",
    label: "natural person",
  },
  {
    id: "legal_entity",
    label: "legal entity",
  },
] as const;

const FormSchema = z.object({
  sourcelanguage: z.string({
    required_error: "Please select your source language",
  }),
  targetlanguage: z.string({
    required_error: "Please select your target language",
  }),
  totalPages: z.string({
    required_error: "please enter page number ",
  }),
  translationType: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  entityType: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  deliveryDate: z.date({
    required_error: "delivery date is required.",
  }),
  additionalrequests: z.string({
    required_error: "additional requests is required.",
  }),
  contactPerson: z.string({
    required_error: "please add a contact person",
  }),
  companyName: z.string({
    required_error: "please enter a company name",
  }),
  phoneNumber: z.string({
    required_error: "please enter you phone number",
  }),
  email: z
    .string({
      required_error: "please enter your email address",
    })
    .email({
      message: "Please enter your email address",
    }),
  companyRegistrationNumber: z.string({
    required_error: "Please enter a company registration number",
  }),
  documents: z.array(
    z.object(
      {
        name: z.string(),
        size: z.number(),
      },
      {
        required_error: "upload you documents",
      }
    ),
    {
      required_error: "upload your documents",
    }
  ),
});

export default function OrderForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      translationType: ["authorized"],
      sourcelanguage: "romanian",
      targetlanguage: "english",
      entityType: ["legal_entity"],
      additionalrequests: "",
      email: "",
      companyRegistrationNumber: "",
      phoneNumber: "",
      companyName: "",
      contactPerson: "",
      totalPages: "",
    },
  });

  const { control, handleSubmit, setValue, watch } = form;
  const translationType = watch("translationType") as string[];
  const EntityType = watch("entityType") as string[];
  const documents = (watch("documents") as any[]) || [];

  const handleEntityTypeClick = (selectedType: string) => {
    if (EntityType.includes(selectedType)) {
      // Remove the type if already selected
      setValue(
        "entityType",
        EntityType.filter((type) => type !== selectedType)
      );
    } else {
      // Add the type if not selected
      setValue("entityType", [...EntityType, selectedType]);
    }
  };
  const handleTranslationTypeClick = (selectedType: string) => {
    if (translationType.includes(selectedType)) {
      // Remove the type if already selected
      setValue(
        "translationType",
        translationType.filter((type) => type !== selectedType)
      );
    } else {
      // Add the type if not selected
      setValue("translationType", [...translationType, selectedType]);
    }
  };

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the order Thank you!",
      // description: (
      //   <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
      //     <code className="text-white">{JSON.stringify(data, null, 2)}</code>
      //   </pre>
      // ),
    });
    console.log(data);
  }

  const handleDeleteFile = (index: number) => {
    const updatedFiles = [...documents];
    updatedFiles.splice(index, 1); // Remove the file at the specified index

    setValue("documents", updatedFiles); // Update the form value
  };

  // translate hook

  const details = useTranslations("translationDetails");
  const d = useTranslations("documents");
  const pi = useTranslations("personalInformation");
  const t = useTranslations("order");
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
        <div className=" space-y-4">
          <div>
            <h2 className=" text-lg font-medium">1.{details("title")} </h2>
          </div>
          <div className=" grid sm:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="sourcelanguage"
              render={({ field }) => (
                <FormItem className=" space-y-1">
                  <FormLabel className="text-sm text-dark-purple">
                    {details("1")}
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="romanian">romanian</SelectItem>
                      <SelectItem value="english">english</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="targetlanguage"
              render={({ field }) => (
                <FormItem className=" space-y-1">
                  <FormLabel className="text-sm text-dark-purple">
                    {details("2")}
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="romanian">romanian</SelectItem>
                      <SelectItem value="english">english</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={control}
            name="totalPages"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm text-dark-purple">
                  {details("3")}
                </FormLabel>
                <FormControl>
                  <Input placeholder="ex: 100" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="translationType"
            render={() => (
              <FormItem>
                <FormLabel className="text-sm text-dark-purple">
                  {details("type")}
                </FormLabel>
                <div className="flex flex-row flex-wrap gap-3 items-start space-x-3 space-y-0">
                  {translationTypes.map((item) => (
                    <div key={item.id}>
                      <Button
                        key={item.id}
                        onClick={() => handleTranslationTypeClick(item.id)}
                        variant={
                          translationType.includes(item.id)
                            ? "default"
                            : "outline"
                        }
                        className=" text-lg font-bold space-x-2 rounded-[14px] items-center gap-2"
                        size={"lg"}
                        type="button"
                      >
                        {item.label}
                        {translationType.includes(item.id) && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path
                              d="M1 11.6667L4.2 15.9333C4.56667 16.4222 4.75 16.6667 5 16.6667C5.25 16.6667 5.43333 16.4222 5.8 15.9333L17 1"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className=" space-y-4">
          <div>
            <h2 className=" text-lg font-medium">2.{d("title")}</h2>
          </div>
          <div>
            <FormField
              control={form.control}
              name="documents"
              render={({ field }) => (
                <FormItem className=" space-y-1">
                  <FormLabel className="text-sm text-dark-purple">
                    {d("1")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept=".doc, .docx, .pdf"
                      className=" border border-dashed border-purple"
                      placeholder="click to add documents."
                      multiple
                      onChange={(e) => {
                        const newFiles = Array.from(e.target.files || []);
                        const updatedFiles = [...documents, ...newFiles];

                        field.onChange(updatedFiles);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className=" py-4 flex items-start justify-between">
              <ul className=" list-inside w-full">
                {documents?.map((file, index) => (
                  <li
                    className="flex items-center justify-between w-full"
                    key={index}
                  >
                    <span className=" text-lg text-purple font-medium">
                      {file.name} - {file.size} bytes
                    </span>
                    <button
                      onClick={() => handleDeleteFile(index)}
                      type="button"
                    >
                      {documents && (
                        <Image
                          src={"/images/trash.svg"}
                          alt="trash"
                          width={25}
                          height={25}
                        />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <FormField
            control={form.control}
            name="deliveryDate"
            render={({ field }) => (
              <FormItem className="flex flex-col space-y-1">
                <FormLabel className="text-sm text-dark-purple">
                  {d("2")}
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          " w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>select date </span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="additionalrequests"
            render={({ field }) => (
              <FormItem className=" space-y-1">
                <FormLabel className="text-sm text-dark-purple">
                  {d("3")}
                </FormLabel>
                <FormControl>
                  <Input placeholder="ex: order information" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className=" space-y-4">
          <div>
            <h2 className=" text-lg font-medium">3.{pi("title")} </h2>
          </div>
          <FormField
            control={control}
            name="translationType"
            render={() => (
              <FormItem>
                <FormLabel className="text-sm text-dark-purple">
                  {pi("1")}
                </FormLabel>
                <div className="flex flex-wrap gap-3 flex-row items-start space-x-3 space-y-0">
                  {entityTypesItems.map((item) => (
                    <div key={item.id}>
                      <Button
                        key={item.id}
                        onClick={() => handleEntityTypeClick(item.id)}
                        variant={
                          EntityType.includes(item.id) ? "default" : "outline"
                        }
                        className=" text-lg font-bold space-x-2 rounded-[14px] items-center gap-2"
                        size={"lg"}
                        type="button"
                      >
                        {item.label}
                        {EntityType.includes(item.id) && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path
                              d="M1 11.6667L4.2 15.9333C4.56667 16.4222 4.75 16.6667 5 16.6667C5.25 16.6667 5.43333 16.4222 5.8 15.9333L17 1"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className=" grid sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="contactPerson"
              render={({ field }) => (
                <FormItem className=" space-y-1">
                  <FormLabel className="text-sm text-dark-purple">
                    {pi("2")}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem className=" space-y-1">
                  <FormLabel className="text-sm text-dark-purple">
                    {pi("3")}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="ex. Firma SRL" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className=" space-y-1">
                  <FormLabel className="text-sm text-dark-purple">
                    {pi("4")}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="+40" {...field} />
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
                  <FormLabel className="text-sm text-dark-purple">
                    {pi("5")}
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="nume@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="companyRegistrationNumber"
            render={({ field }) => (
              <FormItem className=" space-y-1">
                <FormLabel className="text-sm text-dark-purple">
                  {pi("6")}
                </FormLabel>
                <FormControl>
                  <Input placeholder="ex: RO1234567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className=" flex justify-end pt-5">
          <Button size={"lg"} type="submit">
            {t("btnText")}
          </Button>
        </div>
      </form>
    </Form>
  );
}
