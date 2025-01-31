import Layout from "@/app/components/Layout";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "How I transitioned to Tech",
    slug: "journey-in-tech",
    image: "/images/pix1.jpg",
    category: "Tech",
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
];

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;
  const post = posts.find((p) => p.slug === slug);
  const relatedPosts = posts.filter(
    (p) => p.category === post?.category && p.slug !== slug
  );

  const sharePost = (platform) => {
    const url = encodeURIComponent(window.location.href);
    let shareUrl = "";
    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${url}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      default:
        break;
    }
    window.open(shareUrl, "_blank");
  };

  if (!post) return null;

  return (
    <Layout>
      <section className="mt-20">
        <h2 className="text-3xl font-bold capitalize">{post.title}</h2>
        <Image
          src={post.image}
          alt={post.title}
          height={350}
          width={350}
          className="w-full h-40 object-cover rounded-md"
        />
        <p className="text-gray-600 mt-2">{post.content}</p>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold">Related Posts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {relatedPosts.map((relatedPost) => (
              <div
                key={relatedPost.id}
                className="bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg"
              >
                <Link
                  href={`/blog/${relatedPost.slug}`}
                  className="text-lg font-semibold dark:text-white"
                >
                  {relatedPost.title}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold">Share This Post</h3>
          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => sharePost("twitter")}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Share on Twitter
            </button>
            <button
              onClick={() => sharePost("facebook")}
              className="bg-blue-700 text-white p-2 rounded"
            >
              Share on Facebook
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
