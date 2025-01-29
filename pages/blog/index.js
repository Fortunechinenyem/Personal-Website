import Layout from "@/app/components/Layout";
import Link from "next/link";

const posts = [
  {
    id: 1,
    title: "My Journey in Tech",
    slug: "journey-in-tech",
    image: "/images/blog1.jpg",
  },
  {
    id: 2,
    title: "Balancing Motherhood & Career",
    slug: "motherhood-and-career",
    image: "/images/blog2.jpg",
  },
];

export default function Blog() {
  return (
    <Layout>
      <section className="mt-20">
        <h2 className="text-4xl font-bold text-center dark:text-white">
          My Blog
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 dark:text-white">
                {post.title}
              </h3>
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:underline mt-2 block"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
