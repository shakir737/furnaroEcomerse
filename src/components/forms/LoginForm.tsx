"use client";
// import { CardWrapper } from "../auth/cardWrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import * as z from "zod";
import { LoginSchema } from "@/schemas";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormError } from "@/Form_Messages/form-error";
import { FormSuccess } from "@/Form_Messages/form-success";
 import { createUser } from "@/lib/actions/user";
 import { useTransition } from "react";

const LoginForm = () => {
     const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email : "",
            password : "",
        },
    });
const  onSubmit = async (values : z.infer<typeof LoginSchema>) => {
    const {email, password} = values;
    const firstName = "Shakir";
    const lastName = "Raza";
    const country = "Pakistan";
    const phone = "+966570413736";
    const data = {firstName, lastName, email, phone, password, country};
     startTransition(async () => {
      await createUser(data);
     })
   
    
}
    return (
        <div>
           
            <Form {...form}>
               <form
                 onSubmit={form.handleSubmit(onSubmit)}
                 className="space-y-6">
                <div className="space-y-4">
                    <FormField control={form.control} name="email" render={({field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} type="email" placeholder="Please Enter Email"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                     <FormField control={form.control} name="password" render={({field}) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input {...field} type="password" placeholder="******"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />
                  </div>

                  <FormError message="Invalid Credentials"/>
                  <FormSuccess message="Login Successfull"/> 

                 <Button className="w-full" >
                    Login
                 </Button>
               </form>
            </Form>
           
        </div>
    )
}
export default LoginForm;