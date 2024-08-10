import type { Metadata } from 'next'
import { Poppins } from "next/font/google"
import './globals.css'
const NavBar  = dynamic(() => import('@/components/common/NavBar'))
import { Toaster } from '@/components/ui/toaster'
import dynamic from 'next/dynamic'
// import LoadingIndicator from '@/components/common/LoadingIndicator'
const FooterSection  = dynamic(() => import('@/components/sections/FooterSection'))
export const metadata: Metadata = {
  title: 'Furniro Ecommerce',
  description: 'Get any furniture items on the fly',
}

const poppin = Poppins({subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "700"]})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (   
    <html lang="en">
      <body  className={poppin.className} >
      
      <main className="bg-white">
        {/* <LoadingIndicator /> */}
        <NavBar />
        {children}
        <Toaster />
        <div className="mt-[56px]">
          <FooterSection />
        </div>
     </main>
    
    </body>
    </html>
  )
}
