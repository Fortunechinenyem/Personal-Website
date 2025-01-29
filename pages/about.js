import Layout from "@/app/components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <Layout>
      <section className="relative text-center mt-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold dark:text-white">
            Hi, I'm <span className="text-[#2c9c46]">Fortune</span> 👋
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
            Developer | Tutor | Blogger | Customer Experience Pro
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <Image
            src="/images/hero.JPG"
            alt="Fortune"
            width={180}
            height={180}
            className="rounded-full shadow-xl border-4 border-[#2c9c46]"
          />
        </div>
      </section>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16">
        {expertise.map((item) => (
          <div
            key={item.title}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition-all hover:scale-105"
          >
            <div className="text-5xl">{item.icon}</div>
            <h3 className="text-xl font-semibold mt-4 dark:text-white">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {item.description}
            </p>
          </div>
        ))}
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-3xl font-bold dark:text-white">Let's Connect!</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Whether it’s about a project, mentoring, or a casual chat—I’d love to
          hear from you.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-[#2c9c46] text-white rounded-lg shadow-lg hover:bg-blue-700"
        >
          Get in Touch
        </Link>
      </section>
    </Layout>
  );
}

const expertise = [
  {
    title: "Software Development",
    description:
      "Building scalable and high-performing applications with Next.js & JavaScript.",
    icon: "💻",
  },
  {
    title: "Technical Tutoring",
    description:
      "Helping others grow by breaking down complex tech concepts in an easy way.",
    icon: "📚",
  },
  {
    title: "Blogging & Content",
    description:
      "Sharing insights, experiences, and tutorials on technology and life.",
    icon: "✍️",
  },
  {
    title: "Customer Experience",
    description: "Ensuring top-tier support and seamless digital experiences.",
    icon: "💡",
  },
  {
    title: "Public Speaking",
    description: "Speaking at tech events and mentoring aspiring developers.",
    icon: "🎤",
  },
  {
    title: "Work-Life Balance",
    description:
      "Navigating tech, family, and personal growth with purpose and passion.",
    icon: "❤️",
  },
];
