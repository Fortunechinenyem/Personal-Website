import Layout from "@/app/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen text-center md:text-left mt-16">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-extrabold dark:text-white">
            Hi, I'm <span className="text-blue-600">Fortune</span> 👋
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            Developer | Tutor | Blogger | Customer Experience Pro
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <Link
              href="/work"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700"
            >
              Explore My Work
            </Link>
            <Link
              href="/blog"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
            >
              Read My Blog
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="/images/hero.JPG"
            alt="Fortune"
            className="w-80 rounded-lg shadow-lg"
          />
        </div>
      </section>
    </Layout>
  );
}
