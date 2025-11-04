import React from 'react';

const Blogs = () => {
    const blogs = [{
        id: 1,
        title: 'Blog 1',
        description: 'Blog 1 description'
    },
    
    {   id: 2,
        title: 'Blog 2',
        description: 'Blog 2 description'
    }
]
    return (
         <main className='mt-6'>
      <ul>
        {blogs.map((blog) => (
            <li key={blog.id} className='mb-4'>{blog.title}</li>
        ))}
      </ul>
   </main>
    );
};

export default Blogs;