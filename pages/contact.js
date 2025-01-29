import Layout from "@/app/components/Layout";

export default function Contact() {
  return (
    <Layout>
      <section className="mt-20 text-center">
        <h2 className="text-4xl font-bold dark:text-white">Contact Me</h2>
        <form className="mt-6 max-w-lg mx-auto bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg mb-4 dark:bg-gray-700 dark:text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg mb-4 dark:bg-gray-700 dark:text-white"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg mb-4 dark:bg-gray-700 dark:text-white"
          ></textarea>
          <button className="px-6 py-3 bg-[#2c9c46] text-white rounded-lg shadow-lg hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </section>
    </Layout>
  );
}
