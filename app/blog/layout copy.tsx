import Link from "next/link"
import { Children } from "react"
import { Inter } from "next/font/google"
import "@/app/layout";
const inter = Inter({ subsets: ['latin'] })


    export default function RootLayout({ 
        children,
      }: {
        children: React.ReactNode
      }) {
        return (
          <html lang="en">
            <body className={inter.className}>
            <Link href="blog"><img src="images/logo.png" alt="logo" className='logo'/></Link>
            <div className="nav-links" id="navLinks">                
               <ul>                   
                   <li><Link href="/"  style={{color:"black"}}>Home</Link></li>
                   <li><Link href="blog"  style={{color:"black"}}>Blog</Link ></li>
               </ul>
       </div>
              {children}
            
            </body>
          </html>
        )
      }
      
