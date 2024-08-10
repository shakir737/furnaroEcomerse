"use client";

import { useRouter } from "next/navigation";


interface clientButtonProps {
    children: React.ReactNode,
    mode?: "modal" | "redirect",
    asChild?: boolean;
};
export default function  ClientButton  ({
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


