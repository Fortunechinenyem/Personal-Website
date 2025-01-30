// app/work/[slug]/page.js
import { notFound } from "next/navigation";
import projects from "@/data/projects";

export default function ProjectDetail({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound(); // Show a 404 page if the project is not found
  }

  return (
    <Layout>
      <section className="text-center mt-20 px-6 md:px-16">
        <h1 className="text-4xl font-bold dark:text-white">{project.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          {project.description}
        </p>
      </section>
      <section className="py-16 bg-white dark:bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold dark:text-white mb-6">
            Project Overview
          </h2>
          <p className="text-gray-600 dark:text-gray-300">{project.overview}</p>
          <div className="mt-8">
            <h3 className="text-xl font-bold dark:text-white mb-4">
              Tech Stack
            </h3>
            <div className="flex justify-center space-x-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold dark:text-white mb-4">
              Screenshots
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Screenshot ${index + 1}`}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              ))}
            </div>
          </div>
          <div className="mt-8">
            <a
              href={project.liveLink}
              className="px-6 py-3 bg-[#2c9c46] text-white rounded-lg hover:bg-[#24803a] transition-all duration-300"
            >
              Live Demo
            </a>
            <a
              href={project.repoLink}
              className="ml-4 px-6 py-3 border border-[#2c9c46] text-[#2c9c46] rounded-lg hover:bg-[#2c9c46] hover:text-white transition-all duration-300"
            >
              GitHub Repo
            </a>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-[#2c9c46] h-2.5 rounded-full"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
