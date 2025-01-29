import Layout from "@/app/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const posts = [
  {
    id: 1,
    title: "My Journey in Tech",
    slug: "journey-in-tech",
    image: "/images/blog1.jpg",
    category: "Tech",
  },
  {
    id: 2,
    title: "Balancing Motherhood & Career",
    slug: "motherhood-and-career",
    image: "/images/blog2.jpg",
    category: "Parenting",
  },
  {
    id: 3,
    title: "The Future of Work in Tech",
    slug: "future-of-work-in-tech",
    image: "/images/blog3.jpg",
    category: "Tech",
  },
  {
    id: 4,
    title: "Work-Life Balance Tips",
    slug: "work-life-balance-tips",
    image: "/images/blog4.jpg",
    category: "Lifestyle",
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      (selectedCategory === "All" || post.category === selectedCategory) &&
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      <section className="mt-20">
        <h2 className="text-4xl font-bold text-center dark:text-white">
          My Blog
        </h2>

        <div className="text-center mt-6">
          <select
            className="p-2 rounded-md border-2 border-gray-300 dark:bg-gray-800 dark:text-white"
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
          >
            <option value="All">All Categories</option>
            <option value="Tech">Tech</option>
            <option value="Career">Career</option>
            <option value="Parenting">Parenting</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
        </div>

        <div className="text-center mt-4">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-md border-2 border-gray-300 dark:bg-gray-800 dark:text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4"
            >
              <Image
                src={post.image}
                alt={post.title}
                height={100}
                width={100}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 dark:text-white">
                {post.title}
              </h3>
              <Link
                href={`/blog/${post.slug}`}
                className="text-[#2c9c46] hover:underline mt-2 block"
              >
                Read More →
              </Link>

              <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                Category:{" "}
                <span className="text-[#2c9c46]">{post.category}</span>
              </p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
