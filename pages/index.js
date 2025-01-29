import Layout from "@/app/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { FaCode, FaPen, FaHeadset, FaUserGraduate } from "react-icons/fa";

export default function Home() {
  return (
    <Layout>
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen text-center md:text-left mt-16 px-6">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-extrabold dark:text-white animate__animated animate__fadeIn animate__delay-1s">
            Hi, I'm <span className="text-[#2c9c46]">Fortune</span> 👋
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 animate__animated animate__fadeIn animate__delay-2s">
            Developer | Tutor | Blogger | Customer Experience Pro
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4 animate__animated animate__fadeIn animate__delay-3s">
            <Link
              href="/work"
              className="px-6 py-3 bg-[#2c9c46] text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
            >
              Explore My Work
            </Link>
            <Link
              href="/blog"
              className="px-6 py-3 border border-[#2c9c46] text-black rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Read My Blog
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <Image
            src="/images/hero.JPG"
            alt="Fortune"
            width={200}
            height={200}
            className="w-80 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500"
          />
        </div>
      </section>

      <section className="py-16 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold dark:text-white mb-6">
          My Expertise
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center space-y-4">
            <FaCode className="text-4xl text-[#2c9c46]" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Software Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Building innovative and efficient software solutions.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <FaPen className="text-4xl text-[#2c9c46]" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Blogging
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Sharing my thoughts and insights on tech and life.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <FaHeadset className="text-4xl text-[#2c9c46]" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Customer Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Enhancing user experience with great support and feedback.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <FaUserGraduate className="text-4xl text-[#2c9c46]" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Tutoring
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Helping others grow through personalized mentoring.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#2c9c46] text-white text-center py-12">
        <h2 className="text-3xl font-bold">Ready to Collaborate?</h2>
        <p className="text-lg mt-4">
          Whether it’s a project or a chat, I’m always open to new
          opportunities.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block px-6 py-3 bg-white text-[#2c9c46] rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300"
        >
          Let’s Talk
        </Link>
      </section>
    </Layout>
  );
}
