import BlogPage from '@/components/blog-page';
import blogDataRaw from '@/data/destinationBlogs.json';
import { use } from 'react';

interface BlogSection {
  heading: string;
  content: string[];
  images: string[];
}

interface BlogEntry {
  slug: string;
  title: string;
  date: string;
  category: string;
  heroImage: string;
  sections: BlogSection[];
}

interface BlogData {
  [key: string]: BlogEntry;
}

const blogData = blogDataRaw as unknown as BlogData;

interface PageProps {
  params: Promise<{ slug: string }>; // params is a promise now
}

export default function BlogSlugPage({ params }: PageProps) {
  // Use React.use() to unwrap the promise
  const { slug } = use(params);
  console.log('Requested blog slug:', slug); // now prints "vietnam"

  const blog =
    blogData[slug] || Object.values(blogData).find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-lg">Blog not found for slug: {slug}</p>
      </div>
    );
  }

  return <BlogPage blog={blog} />;
}
