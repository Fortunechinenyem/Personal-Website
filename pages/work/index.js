import { useEffect, useState } from "react";
import Layout from "@/app/components/Layout";
import { FaArrowUp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <section className="text-center mt-20 px-6 md:px-16">
        <h2 className="text-4xl font-bold dark:text-white">My Work</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          A selection of projects I’ve worked on. I bring ideas to life using
          modern technologies and thoughtful design.
        </p>
      </section>
      <section className="py-16 bg-white dark:bg-gray-900 text-center">
        <h2 className="text-3xl font-bold dark:text-white mb-6">
          My Portfolio
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg ${
              filter === "all"
                ? "bg-[#2c9c46] text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("web")}
            className={`px-4 py-2 rounded-lg ${
              filter === "web"
                ? "bg-[#2c9c46] text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
            }`}
          >
            Web Development
          </button>
          <button
            onClick={() => setFilter("customer")}
            className={`px-4 py-2 rounded-lg ${
              filter === "customer"
                ? "bg-[#2c9c46] text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
            }`}
          >
            Customer Experience
          </button>
          <button
            onClick={() => setFilter("tutoring")}
            className={`px-4 py-2 rounded-lg ${
              filter === "tutoring"
                ? "bg-[#2c9c46] text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
            }`}
          >
            Tutoring
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300 relative group"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">View Details</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {project.description}
                </p>
                <Link
                  href={`/work/${project.slug}`}
                  className="mt-4 inline-block px-4 py-2 bg-[#2c9c46] text-white rounded-lg hover:bg-[#24803a] transition-all duration-300"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 mt-10 text-center">
        <h3 className="text-3xl font-semibold text-[#2c9c46] dark:text-blue-400 mb-6">
          Customer Experience Projects
        </h3>
        <div className="space-y-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Improved Customer Support Systems
            </h4>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
              Led a project to streamline customer support systems, reducing
              response time by 30% and improving customer satisfaction scores.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Optimized Feedback Collection Process
            </h4>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
              Worked on optimizing the feedback collection process for an online
              service, leading to a 40% increase in actionable feedback.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Implemented Customer Journey Mapping
            </h4>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
              Created customer journey maps to identify pain points, resulting
              in a 25% reduction in churn rate.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12 mt-10 text-center">
        <h3 className="text-3xl font-semibold text-[#2c9c46] dark:text-blue-400 mb-6">
          Tutoring & Mentorship
        </h3>
        <div className="space-y-6">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Technical Tutoring for Beginners
            </h4>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
              Mentored individuals new to software development, guiding them
              through their first coding projects and helping them land their
              first tech job.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold text-gray-800 dark:text-white">
              One-on-One Mentoring for Career Growth
            </h4>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
              Provided personalized career coaching, helping individuals build
              portfolios, improve interview skills, and navigate career
              transitions.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold text-gray-800 dark:text-white">
              Online Group Learning Sessions
            </h4>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
              Facilitated online group learning sessions for beginners in web
              development, fostering a collaborative learning environment.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-[#2c9c46] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Let’s Build Something Amazing Together!
          </h2>
          <p className="text-base sm:text-lg mt-4">
            Whether it’s a project, collaboration, or just a chat, I’d love to
            hear from you.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block px-5 py-2 text-sm sm:text-base bg-white text-[#2c9c46] rounded-md shadow-md hover:bg-gray-200 transition-all duration-300 max-w-[180px] w-full"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <div
        className="fixed bottom-8 right-8"
        style={{
          background: `conic-gradient(#2c9c46 ${scrollProgress}%, transparent ${scrollProgress}% 100%)`,
          borderRadius: "50%",
          padding: "2px",
        }}
      >
        <button
          onClick={scrollToTop}
          className="p-4 bg-white dark:bg-gray-900 text-[#2c9c46] rounded-full shadow-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300"
          aria-label="Back to Top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      </div>
    </Layout>
  );
}

const projects = [
  {
    id: 1,
    title: "Car Auction Platform",
    description:
      "This is a car auction fullstack application. It will handle, auctions and the bids, tracking, payment and delivery.",
    image: "/images/work1.PNG",
    techStack: ["Next.js", "WebSocket", "Stripe", "MongoDB"],
    liveLink: "https://caribex.vercel.app/",
    repoLink: "https://github.com/Fortunechinenyem/CARIBEX",
    slug: "car-auction-platform",
    category: "web",
  },
  {
    id: 2,
    title: "Personal Finance App",
    description:
      "A personal finance management tool to track expenses, income, and budgeting, built with Next.js and MongoDB.",
    image: "/images/work2.PNG",
    techStack: ["Next.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://ego-x.vercel.app/",
    repoLink: "https://github.com/Fortunechinenyem/Finance-app",
    slug: "personal-finance-app",
    category: "web",
  },
  {
    id: 3,
    title: "Recruitment Management System",
    description:
      "This is a recruitment application that handles jobseekers, recruiters, admin features",
    image: "/images/work3.PNG",
    techStack: ["Next.js", "Firebase", "Tailwind CSS"],
    liveLink: "https://recruit-ease.vercel.app/",
    repoLink: "https://github.com/Fortunechinenyem/Recruit-Ease",
    slug: "recruitment-management-system",
    category: "web",
  },
  {
    id: 4,
    title: "Gaming Mental Health Application",
    description:
      "TThis app helps users manage their mental health through guided journaling, mood tracking, and daily challenges. it has a reward system for completing tasks",
    image: "/images/work4.PNG",
    techStack: ["Next.js", "Firebase", "Tailwind CSS"],
    liveLink: "https://gaming-mentalhealth-app.vercel.app/",
    repoLink: "https://github.com/Fortunechinenyem/Gaming-Mentalhealth-App",
    slug: "recruitment-management-system",
    category: "web",
  },
];
