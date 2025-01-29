import Layout from "@/app/components/Layout";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <Layout>
      <section className="mt-20 text-center px-4">
        <h2 className="text-4xl font-bold dark:text-white">Contact Me</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
          I'd love to hear from you! Whether you have a question, want to
          collaborate, or just want to say hi, feel free to reach out.
        </p>

        <form className="mt-8 max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg p-8 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="w-full p-4 mt-6 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
          ></textarea>
          <button className="mt-6 px-6 py-3 bg-[#2c9c46] text-white rounded-lg shadow-lg hover:bg-[#249a3a] transition duration-300">
            Send Message
          </button>
        </form>

        <div className="mt-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Or connect with me on social media:
          </p>
          <div className="flex justify-center space-x-6 text-2xl">
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-700 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="mt-16 bg-gray-100 dark:bg-gray-700 p-8 rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold text-center dark:text-white">
            Stay Updated!
          </h3>
          <p className="text-lg text-center text-gray-600 dark:text-gray-300 mt-4">
            Sign up for my newsletter to receive the latest insights, updates,
            and tips in tech, career, and more.
          </p>
          <form className="mt-6 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-4 w-80 border border-gray-300 rounded-l-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
            />
            <button className="px-6 py-4 bg-[#2c9c46] text-white rounded-r-lg hover:bg-[#249a3a] transition duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
