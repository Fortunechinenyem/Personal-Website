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
        <p className="mb-4">
          Transitioning to tech was one of the most challenging yet rewarding
          decisions I’ve ever made. It all started when I realized my passion
          for problem-solving and creating solutions that impact people’s lives.
        </p>
        <p className="mb-4">
          My journey into tech began with a deep curiosity about how websites
          and apps work. I started by learning HTML and CSS, then moved on to
          JavaScript and React. Over time, I built projects, contributed to open
          source, and eventually landed my first job.
        </p>
        <p className="mb-4">
          I began by learning the basics of programming through online courses
          and coding bootcamps. It wasn’t easy juggling my full-time job and
          studies, but my determination kept me going. Fast forward to today,
          I’m now a full-stack developer working on exciting projects that push
          the boundaries of technology.
        </p>
        <p className="mb-4">
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
        <p className="mb-4">
          Balancing motherhood and a career is no easy feat, but it’s definitely
          possible with the right mindset and strategies. As a working mom, I’ve
          learned to prioritize my time and set boundaries to ensure I’m present
          for both my family and my work.
        </p>
        <p className="mb-4">
          In this blog post, I share practical tips on how I manage my time, set
          boundaries, and stay productive while being present for my family.
        </p>
        <p className="mb-4">
          One of the key things that helped me was creating a daily schedule
          that includes dedicated time for work, family, and self-care. It’s
          also important to communicate with your employer about your needs and
          seek support from your partner or family members.
        </p>
        <p className="mb-4">
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
        <p className="mb-4">
          The tech industry is constantly evolving, and the future of work in
          tech looks more exciting than ever. With advancements in artificial
          intelligence, machine learning, and remote work technologies, the way
          we work is changing rapidly.
        </p>
        <p className="mb-4">
          Remote work, AI, and automation are shaping the future of work in
          tech. In this post, we explore trends, skills in demand, and how to
          stay relevant in a rapidly evolving industry.
        </p>
        <p className="mb-4">
          The rise of remote work, which has opened up opportunities for people
          to work from anywhere in the world. This has also led to a greater
          focus on work-life balance and mental health in the workplace.
        </p>
        <p className="mb-4">
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
        <p className="mb-4">
          Mental health is just as important as physical health, yet it’s often
          overlooked in our busy lives. Taking care of your mental well-being is
          crucial for maintaining a healthy work-life balance.
        </p>
        <p className="mb-4">
          Work-life balance is essential for mental well-being. I discuss
          strategies for managing stress, avoiding burnout, and maintaining a
          healthy lifestyle while working in tech.
        </p>
        <p className="mb-4">
          Some tips I’ve found helpful include setting aside time for
          mindfulness practices like meditation or yoga, taking regular breaks
          during work, and seeking professional help when needed. It’s also
          important to surround yourself with supportive people who understand
          your struggles.
        </p>
        <p className="mb-4">
          Remember, it’s okay to take a step back and prioritize your mental
          health. You can’t pour from an empty cup.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "Curiosity from the Eyes of A Child",
    slug: "curiosity-from-the-eyes-of-a-child",
    image: "/images/pix4.jpg",
    category: "Parenting",
    content: (
      <div>
        <p className="mb-4">
          I truly admire the inquisitive nature of children.
        </p>
        <p className="mb-4">
          Their constant curiosity (of course, this can be tiring if we're being
          honest 😁) not only fuels their learning but also sparks innovation.
        </p>
        <p className="mb-4">
          I’m learning a lot from this mindset—by embracing curiosity in my
          work, I open myself to new ideas, explore uncharted territories, and
          foster continuous growth.
        </p>
        <p className="mb-4">
          This disposition challenges me to never stop asking questions,
          challenging assumptions, and seeking deeper understanding in both my
          personal and professional life.
        </p>
        <p className="mb-4">I do hope you ask those questions.... 🙂</p>
      </div>
    ),
  },
  {
    id: 6,
    title: "Firebase and MongoDB",
    slug: "firebase-and-mongodb",
    image: "/images/pix1.jpg",
    category: "Tech",
    content: (
      <div>
        <p className="mb-4">
          Having worked with MongoDB and Firebase, I'm tempted to make certain
          comparisons 😀. I had always used Mongodb and was very comfortable
          with it that I didn't really bother about firebase until recently... I
          practically saw the light! 😁
        </p>
        <p className="mb-4">
          With MongoDB, I learned the power of flexible schema design and how it
          makes scaling applications a breeze. It’s perfect for handling large,
          unstructured data sets with ease.
        </p>
        <p className="mb-4">
          On the Firebase side, it’s all about rapid development with integrated
          tools like Firestore, Authentication, and Hosting. I’ve seen how
          Firebase streamlines the backend, making real-time features and user
          management seamless.
        </p>
        <p className="mb-4">
          Each tool brought its own value to the table, and it’s amazing how
          they’ve helped me build scalable, dynamic apps in no time.
        </p>
        <p className="mb-4">I'd be more open minded 🙂 .</p>
      </div>
    ),
  },
  {
    id: 7,
    title: "Projects to Try as a Dev",
    slug: "projects-to-try-as-a-dev",
    image: "/images/pix5.jpg",
    category: "Tech",
    content: (
      <div>
        <p className="mb-4">
          This year, we're committing to growth by building systems and
          structures that push us to new heights (Insert the " na me get this
          year" song 😁 ).
        </p>
        <p className="mb-4">
          A while back, I came across a tweet advocating for developers to level
          up by mastering the basics through impactful projects. I couldn't
          agree more!
        </p>
        <p className="mb-4">
          Here's a curated list of projects that are not just practical but will
          also elevate your skills and they are not limited to:
        </p>
        <p className="mb-4">
          E-commerce Platform, Personal Finance Management App, Social Media
          Dashboard, Real-Time Chat Application, Blog Platform with Markdown
          Support, Task Management Tool (Kanban), Fitness Tracking App
          ,Portfolio Website with CMS Integration, Recipe App Event Management
          System, Custom CMS (Content Management System), Weather Dashboard
          ,Learning Management System (LMS) ,AI-Powered Chatbot, URL Shortener
          ,Stock Market Tracker, Online Learning Platform ,Collaborative
          Document Editor, Job Board Platform, Custom CRM (Customer Relationship
          Management) System.
        </p>
        <p className="mb-4">
          These projects are like mini career gyms—each one exercises a
          different part of your developer skill set (especially the bugs 😁)
        </p>
        <p className="mb-4">
          So, no mediocrity this year—we refuse to settle! It's personal
          development season, and we're going all in.{" "}
        </p>
      </div>
    ),
  },
  {
    id: 8,
    title: "The Journey of Growth",
    slug: "the-journey-of-growth",
    image: "/images/pix2.jpg",
    category: "Tech",
    content: (
      <div>
        <p className="mb-4">
          Recently, as a learning project, I decided to build a task management
          application, wanted to know the workings of that kind of application
          especially with its counterparts like trello, clickup and the likes.
        </p>
        <p className="mb-4">It has been a rewarding challenge I must say.</p>
        <p className="mb-4">
          From crafting a smooth user experience to implementing drag-and-drop
          functionality with react-beautiful-dnd (this particular name got me
          really interested 🙂 ), I’ve learned that simplicity often takes the
          most effort. Each feature taught me more about balancing functionality
          with usability.
        </p>
        <p className="mb-4">
          Still in the process though, but it has reinforced that every bug is
          an opportunity to grow (I have encountered aloooot 😀 ), and no detail
          is too small when it comes to user experience.
        </p>
      </div>
    ),
  },
  {
    id: 9,
    title: "Love, Bugs, and Code: My Valentine's Day App Adventure",
    slug: "valentines-day",
    image: "/images/pix2.jpg",
    category: "Lifestyle",
    content: (
      <div>
        <p className="mb-4">
          Ah, Valentine’s Day. The day of love, chocolates, and… task management
          apps? Yes, you read that right. This year, instead of writing sappy
          love letters or buying overpriced roses, I decided to channel my inner
          cupid and create a Valentine’s Day-themed task management app. Because
          nothing says “I love you” like a well-organized to-do list, right?
        </p>
        <p className="mb-4">
          The idea struck me like a rogue arrow from Cupid’s bow. Why not
          combine my love for coding with the spirit of Valentine’s Day? I
          envisioned an app where couples could manage their date plans, gift
          ideas, and even their arguments (because let’s be real, love isn’t
          always rainbows and butterflies). And thus, the{" "}
          <span className="font-bold text-purple-600">“LoveBoard”</span>
          was born.
        </p>
        <p className="mb-4">
          Building the app was a rollercoaster of emotions—kind of like dating,
          actually. There were highs (like when I finally got the drag-and-drop
          feature to work using{" "}
          <span className="font-bold text-purple-600">react-beautiful-dnd</span>
          —yes, the name alone sold me on it). And then there were the lows
          (like when I realized I’d spent three hours debugging a button that
          refused to turn pink). But hey, love is all about perseverance, right?
        </p>
        <p className="mb-4">
          The app was simple but effective. Users could create boards for their
          date plans, add tasks like “Buy chocolates” or “Don’t forget the
          reservation,” and even assign tasks to their partner (because teamwork
          makes the dream work). I added a few Valentine’s Day-themed touches,
          like heart-shaped checkboxes and confetti animations when a task was
          completed. Because who doesn’t love a little confetti in their life?
        </p>
        <p className="mb-4">
          When I finally released the app to a small group of friends, the
          response was overwhelming. People loved it! One friend even said,
          “This is the most romantic thing you’ve ever done.” (I’m choosing to
          take that as a compliment.) Couples were using it to plan their
          perfect Valentine’s Day, and some even joked that it saved their
          relationships. (You’re welcome, world.)
        </p>
        <p className="mb-4">
          Of course, the app wasn’t without its quirks. There was that one bug
          where the confetti animation wouldn’t stop, and users were literally
          buried in digital hearts. (Okay, maybe that wasn’t such a bad thing.)
          And then there was the time the app accidentally sent a reminder to
          “Break up with [Partner’s Name]” instead of “Book dinner with
          [Partner’s Name].” (Oops. My bad.)
        </p>
        <p className="mb-4">
          But through the bugs and the laughs, I learned a valuable lesson:
          love, like coding, is all about iteration. You try, you fail, you
          debug, and you try again. And sometimes, you end up creating something
          that brings a little joy to people’s lives—even if it’s just a silly
          app that helps them remember to buy flowers.
        </p>
        <p className="mb-4">
          So this Valentine’s Day, whether you’re spending it with a significant
          other, your friends, or just your laptop (hello, fellow coders),
          remember that love comes in many forms. For me, it came in the form of
          an app that made people smile—and maybe saved a few relationships
          along the way. ❤️
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
        <Link
          href="/blog"
          className="mt-6 mx-auto inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-[#2c9c46] text-white rounded-md shadow-md hover:bg-[#24803a] hover:scale-105 transition-all duration-300 w-fit"
        >
          ← Back to Blog Gallery
        </Link>
        <h2 className="mt-7 text-3xl font-bold capitalize dark:text-white">
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
