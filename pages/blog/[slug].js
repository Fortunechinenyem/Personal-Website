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
    content: (
      <div>
        <p>
          Transitioning to tech was one of the most challenging yet rewarding
          decisions I’ve ever made. It all started when I realized my passion
          for problem-solving and creating solutions that impact people’s lives.
        </p>
        <p>
          My journey into tech began with a deep curiosity about how websites
          and apps work. I started by learning HTML and CSS, then moved on to
          JavaScript and React. Over time, I built projects, contributed to open
          source, and eventually landed my first job.
        </p>
        <p>
          I began by learning the basics of programming through online courses
          and coding bootcamps. It wasn’t easy juggling my full-time job and
          studies, but my determination kept me going. Fast forward to today,
          I’m now a full-stack developer working on exciting projects that push
          the boundaries of technology.
        </p>
        <p>
          If you’re considering a career in tech, my advice is to start small,
          stay consistent, and never stop learning. The journey might be tough,
          but the rewards are worth it.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Balancing Motherhood & Career",
    slug: "motherhood-and-career",
    image: "/images/pix2.jpg",
    category: "Parenting",
    content: (
      <div>
        <p>
          Balancing motherhood and a career is no easy feat, but it’s definitely
          possible with the right mindset and strategies. As a working mom, I’ve
          learned to prioritize my time and set boundaries to ensure I’m present
          for both my family and my work.
        </p>
        <p>
          In this blog post, I share practical tips on how I manage my time, set
          boundaries, and stay productive while being present for my family.
        </p>
        <p>
          One of the key things that helped me was creating a daily schedule
          that includes dedicated time for work, family, and self-care. It’s
          also important to communicate with your employer about your needs and
          seek support from your partner or family members.
        </p>
        <p>
          Remember, it’s okay to ask for help and take breaks when needed. You
          don’t have to do it all alone.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "The Future of Work in Tech",
    slug: "future-of-work-in-tech",
    image: "/images/pix7.jpg",
    category: "Tech",
    content: (
      <div>
        <p>
          The tech industry is constantly evolving, and the future of work in
          tech looks more exciting than ever. With advancements in artificial
          intelligence, machine learning, and remote work technologies, the way
          we work is changing rapidly.
        </p>
        <p>
          Remote work, AI, and automation are shaping the future of work in
          tech. In this post, we explore trends, skills in demand, and how to
          stay relevant in a rapidly evolving industry.
        </p>
        <p>
          The rise of remote work, which has opened up opportunities for people
          to work from anywhere in the world. This has also led to a greater
          focus on work-life balance and mental health in the workplace.
        </p>
        <p>
          As we move forward, it’s important for tech professionals to stay
          adaptable and continuously upskill to keep up with the latest trends
          and technologies.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "Mental Health",
    slug: "work-life-balance-tips",
    image: "/images/pix3.jpg",
    category: "Lifestyle",
    content: (
      <div>
        <p>
          Mental health is just as important as physical health, yet it’s often
          overlooked in our busy lives. Taking care of your mental well-being is
          crucial for maintaining a healthy work-life balance.
        </p>
        <p>
          Work-life balance is essential for mental well-being. I discuss
          strategies for managing stress, avoiding burnout, and maintaining a
          healthy lifestyle while working in tech.
        </p>
        <p>
          Some tips I’ve found helpful include setting aside time for
          mindfulness practices like meditation or yoga, taking regular breaks
          during work, and seeking professional help when needed. It’s also
          important to surround yourself with supportive people who understand
          your struggles.
        </p>
        <p>
          Remember, it’s okay to take a step back and prioritize your mental
          health. You can’t pour from an empty cup.
        </p>
      </div>
    ),
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
      <section className="mt-20 px-6 md:px-16">
        <h2 className="text-3xl font-bold capitalize dark:text-white">
          {post.title}
        </h2>
        <div className="mt-6">
          <Image
            src={post.image}
            alt={post.title}
            height={400}
            width={800}
            className="w-full h-64 object-cover rounded-md"
          />
        </div>
        <div className="mt-6 text-gray-600 dark:text-gray-300">
          {post.content}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold dark:text-white">
            Related Posts
          </h3>
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

        <div className="mt-12">
          <h3 className="text-xl font-semibold dark:text-white">
            Share This Post
          </h3>
          <div className="flex space-x-4 mt-4">
            <button
              onClick={() => sharePost("twitter")}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-all duration-300"
            >
              Share on Twitter
            </button>
            <button
              onClick={() => sharePost("facebook")}
              className="bg-blue-700 text-white p-2 rounded hover:bg-blue-800 transition-all duration-300"
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
