import { CardWrapper } from "@/components/auth/cardWrapper"
import dynamic from "next/dynamic"

const LoginForm  = dynamic(() => import("@/components/forms/LoginForm"))




export default function LoginPage ()  {
  return (
    <div>
      <CardWrapper headerLabel="Welcome Back !" backButtonLabel="Dont Have an Account" backButtonHref="/auth/register" showSocial>
       <LoginForm />
       </CardWrapper>
       Login form
       
     
    </div>
  )
}


