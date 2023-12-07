import React from "react"
import contact from "@/app/contact/page"
import Link from "next/link"
import Image from "next/image"
import "@/app/style.css"
import Footer from "../components/footer/footer"

export default function Contact() {
    return (  
        <main className='md:text-[14px] sm:text-[16px]  xl:text-[20px] 2xl:text-[26px]'> 
            <section className="contact-bgImage" >
        <nav className="logo"> 
            <Link href="/blog" >
               <img src="images/Logo.png"/> 
            </Link>
            </nav>
            <div className="nav-links" id="navLinks">
          <ul > 
            <li><Link href="/" style={{ color: "Black" }}>Home</Link></li> 
            <li><Link href="blog" style={{ color: "Black" }}>Blog</Link ></li>
            <li><Link href="/contact" style={{color:"Black"}}>Contact</Link></li>
          </ul>
        </div> 
        <h1 style={{color:"#4d4d4d" , fontSize:"4em"}}>Contact Us</h1>
            </section>
            
             
          
            {/* <i className="fa fa-bars" onclick="showMenu()"></i> */}
            {/* <!-- reposnive bar open and close --> */}
        
        
    

    {/* <!-- Contact Us Section Start --> */}

    <section className="location">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1769.8166912123172!2d73.07127491969685!3d31.38878362498073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39225d4d844df487%3A0x977670c4d3f0a8ee!2sAminabad%20Rd%2C%20Samanabad%2C%20Faisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1701958457411!5m2!1sen!2s" 
    width="600" height="450" style={{border:"0" , textAlign:"center"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
      
    </iframe>
    </section> 

    <section className="contact-us">
        <div className="row">
            <div className="content-col">
                <div>
                    <i className="fa fa-home"></i>
                    <span> 
                        <h5>Aminabad # 2 , Samnabad</h5>
                        <p>Faisalabad, Punjab, PK</p>
                    </span>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <span>
                        <h5>+92 3079664615</h5>
                        <p>Monday To Saturday, 9AM To 6PM</p>
                    </span>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <span>
                        <h5>xyz@email.com</h5>
                        <p>Email Us Yor Query</p>
                    </span>
                </div>
            </div>
            <div className="content-col">
                <form>
                    <input type="text" placeholder="Enter Name" required />
                    <input type="email" placeholder="Enter Email" required />
                    <input type="text" placeholder="Enter Subject" required />
                    <textarea rows={8} placeholder="Message" required></textarea>
                    <Link href="https://api.whatsapp.com/send?phone=923079664615"><button type="submit" className="hero_btn_btn">Send Message</button></Link>
                </form>
            </div>
        </div>
    </section>
    <Footer />
        </main>
    )
}