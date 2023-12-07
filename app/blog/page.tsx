import React from 'react';
import BlogList from '@/app/bloglist';
import "@/app/style.css"
import Link from 'next/link';
import Header from '../components/header/header';


function BlogPage(){
  return (
    <main>
      <section className='blog-bgImage'>
        <Header />
      <p className='blog-main-text'>Welcome to the Blog Page</p>
      </section>
      <BlogList />
    </main>
  );
};

export default BlogPage;
