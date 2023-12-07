import Link from "next/link"

export default function Header(){
    return(
        <main>
             <Link href="blog"><img src="images/Logo.png" alt="logo" className='logo'/></Link>
            <div className="nav-links" id="navLinks">                
               <ul>                   
                   <li><Link href="/"  style={{color:"black"}}>Home</Link></li>
                   <li><Link href="/blog"  style={{color:"black"}}>Blog</Link ></li>
                   <li><Link href="/contact" style={{color:"black"}}>Contact</Link></li>
               </ul>
       </div>
        </main>
    )
}