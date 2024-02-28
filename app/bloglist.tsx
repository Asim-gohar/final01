'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { blogPages } from '@/public/data/page';
import Image from 'next/image';
import "@/app/style.css"
import blog from "@/app/blog/page"
import { MdAddChart } from 'react-icons/md'

const BlogList = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [newBlogTitle, setNewBlogTitle] = useState<string>('');

  const handleAddBlog = () => {
    console.log('Adding new blog:', newBlogTitle);
    setNewBlogTitle('');
    setIsOpen(false);
  };
  return (

    <div className="blog-list">
      <div className="flex justify-between mt-3">
        <h2 className="text-2xl font-semibold mb-4">Blogs List</h2>
        <button
          className="flex justify-center items-center mb-2 bg-green-500 rounded p-1 hover:bg-yellow-500"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <MdAddChart />
          Add blog
        </button>
      </div>
      <br />
      <ul className="blog-grid">
        {blogPages.map((page: any) => (
          <li key={page.slug} className="blog-item">
            <Link href={`/blog/${page.slug}`}>
              <div className='img'>
                {page.id === "1" && (
                  <img src='/images/code.jpg' alt='Software Head' />)}
                {page.id === "2" && (
                  <img src='images/software-head.png' alt='Software Head' />)}

                {page.id === "3" && (
                  <img src='images/companies-head.jpg' alt='Companies Head' />)}

                {page.id === "4" && (
                  <img src='images/AI-head.jpg' alt='AI Head' />)}

                {page.id === "5" && (
                  <img src='images/travel-head.jpg' alt='travel Head' />)}

                {page.id === "6" && (
                  <img src='images/media-head.jpg' alt='travel Head' />)}

                {page.id === "7" && (
                  <img src='images/health-head.jpg' alt='travel Head' />)}


                <h1>{page.title}</h1>  <hr />
                <p className='Hide'>{page.content}</p>

              </div>
            </Link>
          </li>
        ))}
      </ul>
      {isOpen && (
        <div>
          <label htmlFor="newBlogTitle">New Blog Title:</label>
          <input
            type="text"
            id="newBlogTitle"
            value={newBlogTitle}
            onChange={(e) => setNewBlogTitle(e.target.value)}
          />
          <button onClick={handleAddBlog}>Add Blog</button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
