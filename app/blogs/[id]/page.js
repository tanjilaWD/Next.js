
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function BlogPage({ params }) {
  
  const resolvedParams = await params;
  
 if (resolvedParams.id === '3'){
  notFound();
 }

  return (
    <main className="mt-6">
      <div className="text-lg font-bold">The blog id is: {resolvedParams.id}</div>
      <Link href="/blogs" className="text-blue-500 mt-4 block">
        Back to Blogs
      </Link>
    </main>
  );
}
