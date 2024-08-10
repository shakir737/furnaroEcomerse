import Link from "next/link";
import { Button } from "./button";

interface backButtonProps {
    href : string,
    label : string,
}
export const BackButton = ({href, label} : backButtonProps) => {
    return (
      <Button variant="link" className="font-normal w-full" size="sm" asChild>
         <Link href={href} scroll={false}>
         {label}
         </Link>
      </Button>
    );
}