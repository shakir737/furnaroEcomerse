 "use client"

import { BackButton } from "../ui/backButton";
import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from "../ui/card";
import { Header } from "../ui/header";
import { Social } from "./social";

interface CardWrapperProps {
children : React.ReactNode;
headerLabel : string;
backButtonLabel : string;
backButtonHref : string;
showSocial? : boolean;
}
export const CardWrapper = ({children, headerLabel, backButtonLabel, backButtonHref, showSocial} : CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
     <CardHeader>
        <Header label={headerLabel}/>
     </CardHeader>
     <CardContent>
     {children} 
     </CardContent>
     { showSocial && (
        <CardFooter>
            <Social />
        </CardFooter>
     )}
     <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel}>

        </BackButton>
     </CardFooter>
    </Card>
  );
};
