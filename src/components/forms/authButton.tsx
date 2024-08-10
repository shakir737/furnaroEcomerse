"use client";

import { useRouter } from "next/navigation";


interface clientButtonProps {
    children: React.ReactNode,
    mode?: "modal" | "redirect",
    asChild?: boolean;
    data: object;
};
export default function  AuthButton  ({
  children,
  mode = "redirect",
  asChild
}:clientButtonProps) {
    const router = useRouter();
   
    const onClick = () => {
       
        router.push("/auth/login");

    }
  return (
    <span className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  );
};


