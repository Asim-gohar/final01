import React from 'react';
import Link from 'next/link';
import { blogPages } from '@/public/data/page';
import Image from 'next/image';
import "@/app/style.css"
import blog from "@/app/blog/page"

const BlogList = () => {
  return (

    <div className='blog-list'>
      <h1 className='blog-h1'>Blog Pages:</h1>
      <br />
      <ul className="blog-grid">
        {blogPages.map((page : any) => (
         <li key={page.slug} className="blog-item">
            <Link href={`/blog/${page.slug}`}> 
        <div className='img'>        
          {page.id === "1" && (
            <img src='images/software-head.png' alt='Software Head' />)}            

          {page.id === "2" && (
          <img src='images/companies-head.jpg' alt='Companies Head' />)} 

          {page.id === "3" && (
          <img src='images/AI-head.jpg' alt='AI Head' />)} 

        {page.id === "4" && (
          <img src='images/travel-head.jpg' alt='travel Head' />)} 

        {page.id === "5" && (
          <img src='images/media-head.jpg' alt='travel Head' />)} 
          
        {page.id === "6" && (
          <img src='images/health-head.jpg' alt='travel Head' />)} 


            <h1>{ page.title }</h1>  <hr />
            <p className='Hide'>{page.content}</p>
            
            </div>          
            </Link>           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
