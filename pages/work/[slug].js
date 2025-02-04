import Layout from "@/app/components/Layout";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Car Auction Platform",
    description:
      "This is a car auction fullstack application. It will handle, auctions and the bids, tracking, payment and delivery.",
    image: ["/images/work1.PNG"],
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
    image: ["/images/work2.PNG"],
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
    image: ["/images/work3.PNG"],
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
      "This app helps users manage their mental health through guided journaling, mood tracking, and daily challenges. it has a reward system for completing tasks",
    image: ["/images/work4.PNG"],
    techStack: ["Next.js", "Firebase", "Tailwind CSS"],
    liveLink: "https://gaming-mentalhealth-app.vercel.app/",
    repoLink: "https://github.com/Fortunechinenyem/Gaming-Mentalhealth-App",
    slug: "recruitment-management-system",
    category: "web",
  },
];

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
}

export default function ProjectDetail({ project }) {
  if (!project) {
    return (
      <Layout>
        <section className="text-center mt-20 px-6 md:px-16">
          <h1 className="text-4xl font-bold dark:text-white">
            Project Not Found
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
            The project you're looking for does not exist.
          </p>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="text-center mt-20 px-6 md:px-16">
        <Link
          href="/work"
          className="mt-6 mx-auto inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-[#2c9c46] text-white rounded-md shadow-md hover:bg-[#24803a] hover:scale-105 transition-all duration-300 w-fit"
        >
          ← Back to Work Gallery
        </Link>

        <h1 className="mt-7 text-4xl font-bold dark:text-white">
          {project.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          {project.description}
        </p>
      </section>
      <section className="py-16 bg-white dark:bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold dark:text-white mb-6">
            Project Overview
          </h2>
          <div className="mt-8">
            <h3 className="text-xl font-bold dark:text-white mb-4">
              Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg text-sm sm:text-base"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8">
            {/* <h3 className="text-lg sm:text-xl font-bold dark:text-white mb-4">
              Screenshots
            </h3> */}

            <div className="text-center">
              {project.image.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Screenshot ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={project.liveLink}
                className="px-6 py-3 bg-[#2c9c46] text-white rounded-lg hover:bg-[#24803a] transition-all duration-300 w-full sm:w-auto text-center"
              >
                Live Demo
              </a>
              <a
                href={project.repoLink}
                className="px-6 py-3 border border-[#2c9c46] text-[#2c9c46] rounded-lg hover:bg-[#2c9c46] hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
