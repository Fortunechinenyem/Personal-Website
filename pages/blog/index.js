import Layout from "@/app/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const posts = [
  {
    id: 1,
    title: "How I transitioned to Tech",
    slug: "journey-in-tech",
    image: "/images/pix1.jpg",
    category: "Career",
  },
  {
    id: 2,
    title: "Balancing Motherhood & Career",
    slug: "motherhood-and-career",
    image: "/images/pix2.jpg",
    category: "Parenting",
  },
  {
    id: 3,
    title: "The Future of Work in Tech",
    slug: "future-of-work-in-tech",
    image: "/images/pix7.jpg",
    category: "Tech",
  },
  {
    id: 4,
    title: "Mental Health",
    slug: "work-life-balance-tips",
    image: "/images/pix3.jpg",
    category: "Lifestyle",
  },
  {
    id: 5,
    title: "Curiosity from the Eyes of A Child",
    slug: "curiosity-from-the-eyes-of-a-child",
    image: "/images/pix4.jpg",
    category: "Parenting",
  },
  {
    id: 6,
    title: "Firebase and MongoDB",
    slug: "firebase-and-mongodb",
    image: "/images/pix1.jpg",
    category: "Tech",
  },
  {
    id: 7,
    title: "Projects to Try as a Dev",
    slug: "projects-to-try-as-a-dev",
    image: "/images/pix5.jpg",
    category: "Tech",
  },
  {
    id: 7,
    title: "The Journey of Growth",
    slug: "the-journey-of-growth",
    image: "/images/pix2.jpg",
    category: "Tech",
  },
  {
    id: 8,
    title: "Love, Bugs, and Code: My Valentine's Day App Adventure",
    slug: "valentines-day",
    image: "/images/work6.PNG",
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
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
                height={350}
                width={350}
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
      <div className="group fixed bottom-8 right-8">
        <button
          onClick={scrollToTop}
          className="p-4 bg-[#2c9c46] text-white rounded-full shadow-lg hover:bg-[#24803a] transition-all duration-300"
          aria-label="Back to Top"
        >
          <FaArrowUp className="text-xl" />
        </button>
        <div className="absolute bottom-14 right-0 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Back to Top
        </div>
      </div>
    </Layout>
  );
}
