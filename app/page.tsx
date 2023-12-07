import Image from 'next/image';
import React from 'react';
import "@/app/style.css"
import Link from 'next/link';
import Contact from '@/app/contact/page';
import Footer from './components/footer/footer';

export default function Home() {
  return (
    <main>
      <section className='header'>
        <Link href="blog"><img src="images/Logo.png" alt="logo" className='logo' /></Link>
        <div >
          {/* <img src="/images/Back1.jpg" alt="blog banner" /> */}

        </div>
        <div className="nav-links" id="navLinks">
          <ul>
            <li><Link href="/" style={{ color: "White" }}>Home</Link></li>
            <li><Link href="blog" style={{ color: "White" }}>Blog</Link ></li>
            <li><Link href="/contact" style={{color:"white"}}>Contact</Link></li>
          </ul>
        </div>
        <div className='main-text'>
          <h1>Welcome To Our Blogs</h1>
          <a href="blog" className="hero_btn">Know more in details</a>
        </div>

     </section>
     <section className='main-section'>
     <p className='header-p'>Explore interesting articles and stay updated with the latest trends.</p>
     <article>
      <h2 className='article'>Articles</h2>
      <p className='main-p'>"Discover the fascinating world of astrophysics as we delve into the mysteries of the cosmos. In this article, we explore the latest breakthroughs in space exploration, from uncovering the secrets of distant galaxies to understanding the fundamental forces that govern the universe. Join us on an awe-inspiring journey through the cosmos, where cutting-edge research and captivating discoveries await. Whether you're a seasoned astronomy enthusiast or a curious newcomer, this article promises to ignite your sense of wonder and expand your knowledge of the vast and intricate celestial tapestry that surrounds us."</p>
      <a href="blog">Read More</a>
    </article>

    <article>
      <h2 className='article'>Navigate to Blog page </h2>
      <p className='main-p'>"Embark on a journey of knowledge and exploration as you navigate to our blog page. Dive into a diverse array of topics, from the latest trends in technology to insightful discussions on art and culture. Our blog is a curated space designed to captivate your curiosity and keep you informed. Join us on this intellectual adventure, where each post is a portal to new insights and ideas. Navigate to our blog page and let the exploration begin!"</p>
      <a href="blog">Read More</a>
    </article>
     </section>
      <Footer />
    </main>
  );
}


