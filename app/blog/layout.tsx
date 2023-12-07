import Link from "next/link"
import { Children } from "react"
import { Inter } from "next/font/google"
import "@/app/layout";
import Footer from "../components/footer/footer";
import Contact from "@/app/contact/page";
import {FaFacebookF , FaInstagram , FaTwitter , FaLinkedin, FaWhatsapp} from "react-icons/fa"

const inter = Inter({ subsets: ['latin'] })
    export default function RootLayout({ 
        children,
      }: {
        children: React.ReactNode
      }) {
        return (
          <html lang="en">
            <body className={inter.className}>
           
              {children}
           
        <Footer /> 
            </body>
          </html>
        )
      } 
      
