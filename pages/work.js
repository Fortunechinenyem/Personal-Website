import Layout from "@/app/components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <Layout>
      <section className="text-center mt-20 px-6 md:px-16">
        <h2 className="text-4xl font-bold dark:text-white">My Work</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          A selection of projects I’ve worked on. I bring ideas to life using
          modern technologies and thoughtful design.
        </p>
      </section>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16">
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
      </section>
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
