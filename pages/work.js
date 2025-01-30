import { useEffect, useState } from "react";
import Layout from "@/app/components/Layout";
import { FaArrowUp } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {[
            {
              id: 1,
              title: "Project Alpha",
              description: "A web app for managing tasks efficiently.",
              image: "/images/project1.jpg",
              link: "#",
            },
            {
              id: 2,
              title: "Project Beta",
              description: "An e-learning platform with interactive courses.",
              image: "/images/project2.jpg",
              link: "#",
            },
            {
              id: 3,
              title: "Project Gamma",
              description: "A customer feedback analysis tool.",
              image: "/images/project3.jpg",
              link: "#",
            },
          ].map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {project.description}
                </p>
                <Link
                  href={project.link}
                  className="mt-4 inline-block px-4 py-2 bg-[#2c9c46] text-white rounded-lg hover:bg-[#24803a] transition-all duration-300"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition-all hover:scale-105"
          >
            <div className="relative w-full h-60">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mt-4 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {project.description}
            </p>
            <div className="mt-4 flex space-x-4">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="text-sm text-gray-500 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 flex justify-between">
              <Link
                href={project.liveLink}
                passHref
                className="text-[#2c9c46] hover:text-blue-700"
              >
                View Project
              </Link>
              {project.repoLink && (
                <Link
                  href={project.repoLink}
                  passHref
                  className="text-[#2c9c46] hover:text-blue-700"
                >
                  GitHub
                </Link>
              )}
            </div>
          </div>
        ))}
      </section> */}

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
    title: "Car Auction Platform",
    description:
      "A full-stack car auction platform with live bidding and payment integration, built with Next.js and WebSockets.",
    image: "/images/car-auction.jpg",
    techStack: ["Next.js", "WebSocket", "Stripe", "MongoDB"],
    liveLink: "https://car-auction.com",
    repoLink: "https://github.com/yourusername/car-auction",
  },
  {
    title: "Personal Finance App",
    description:
      "A personal finance management tool to track expenses, income, and budgeting, built with Next.js and MongoDB.",
    image: "/images/finance-app.jpg",
    techStack: ["Next.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://finance-app.com",
    repoLink: "https://github.com/yourusername/finance-app",
  },
  {
    title: "Event Management System",
    description:
      "A platform to manage events, RSVP, and ticketing with Next.js, designed for smooth event planning.",
    image: "/images/event-management.jpg",
    techStack: ["Next.js", "Firebase", "Tailwind CSS"],
    liveLink: "https://event-management.com",
    repoLink: "https://github.com/yourusername/event-management",
  },
];
