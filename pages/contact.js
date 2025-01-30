import Layout from "@/app/components/Layout";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <Layout>
      <section className="py-16 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold dark:text-white mb-6">Contact Me</h2>
        <form className="max-w-lg mx-auto px-6">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 rounded-lg focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-[#2c9c46] text-white rounded-lg shadow-lg hover:bg-[#24803a] transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </section>
      <section className="mt-20 text-center px-4">
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
        <section className="py-16 mt-7 bg-[#2c9c46] text-white text-center">
          <h2 className="text-3xl font-bold">Stay Updated</h2>
          <p className="text-lg text-center  dark:text-gray-300 mt-4">
            Sign up for my newsletter to receive the latest insights, updates,
            and tips in tech, career, and more.
          </p>
          <form className="mt-6 flex justify-center">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-l-lg focus:outline-none text-gray-800"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-white text-[#2c9c46] rounded-r-lg hover:bg-gray-200 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </section>
      </section>
    </Layout>
  );
}
