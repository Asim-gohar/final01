import React from 'react';
import { blogPages } from "@/public/data/page"; // Assuming your data is in a separate file
import Image from 'next/image';

const Pages = ({ params }: { params: { slug: string } }) => {
  // const selectedBlog = blogPages.filter((item: { slug: string; }) => item.slug === params.slug);
  const selectedBlog = blogPages.find((item: { slug: string }) => item.slug === params.slug);

  if (!selectedBlog) {
    return <div>Blog post not found</div>;
  }

  return (
    <div>
      <h1>{selectedBlog.title}</h1>
      {selectedBlog.Image && (
        <div>
          <Image
            src={selectedBlog.Image.src}
            alt={selectedBlog.Image.alt}
            width={selectedBlog.Image.width}
            height={selectedBlog.Image.height}
          />
      
<div>{selectedBlog.content}</div>
<hr/>
{selectedBlog.headings && selectedBlog.paragraph && (
        <div>
          <h2>{selectedBlog.headings[0]}</h2>
          <p>{selectedBlog.paragraph[0]}</p>
          <h2>{selectedBlog.headings[1]}</h2>
          <p>{selectedBlog.paragraph[1]}</p>
          <h2>{selectedBlog.headings[2]}</h2>
          <p>{selectedBlog.paragraph[2]}</p>
          <h2>{selectedBlog.headings[3]}</h2>
          <p>{selectedBlog.paragraph[3]}</p>
          <h2>{selectedBlog.headings[4]}</h2>
          <p>{selectedBlog.paragraph[4]}</p>
          <hr/>
          <br/>
          <p>{selectedBlog.paragraph[5]}</p>
          {/* <p>{selectedBlog.paragraph[4]}</p> */}
        </div>        
      )}
        </div>
      )
      }
      
    </div>
  );
};

export default Pages;
