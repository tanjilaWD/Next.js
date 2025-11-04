import Link from "next/link";

export default function Blogs() {
  const blogs = [
    { id: 1, title: "Blog 1", description: "Blog 1 description" },
    { id: 2, title: "Blog 2", description: "Blog 2 description" },
  ];

  return (
    <main className="mt-6">
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} className="mb-4">
            <Link href={`/blogs/${blog.id}`} className="text-blue-600 hover:underline">
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
