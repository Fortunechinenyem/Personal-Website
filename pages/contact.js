import { useState } from "react";
import Layout from "@/app/components/Layout";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState(""); // For newsletter subscription
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    console.log("Form Data before submission:", formData); // Debugging step

    // Ensure all fields have values
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required");
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setSubmitted(true);
      } else {
        setError(result.message || "Failed to send message.");
      }
    } catch (error) {
      setError("An unexpected error occurred. Please try again.");
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Subscription successful! Check your inbox.");
        setEmail("");
      } else {
        setMessage(data.error || "Something went wrong. Try again.");
      }
    } catch (error) {
      setMessage("Error: Unable to subscribe. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="py-20 mt-10 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold dark:text-white mb-6">Contact Me</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 border rounded-md"
              onChange={handleChange}
              value={formData.name}
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 border rounded-md"
              onChange={handleChange}
              value={formData.email}
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-2 border rounded-md"
              onChange={handleChange}
              value={formData.message}
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2 bg-[#2c9c46] text-white rounded-lg sm:rounded-r-lg hover:bg-gray-200 transition-all duration-300"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
      </section>

      <section className="mt-20 text-center px-4">
        <div className="mt-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Or connect with me on social media:
          </p>
          <div className="flex justify-center space-x-6 text-2xl">
            <a
              href="https://x.com/FortuneChineny1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/fortune-chinenyem-aribido-6578b8185/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Fortunechinenyem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-700 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/fortunatechie?igsh=bXc2a3pnMm55ZWl3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <section className="py-16 px-6 mt-7 bg-[#2c9c46] text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold">Stay Updated</h2>
            <p className="text-base sm:text-lg text-center dark:text-gray-300 mt-4">
              Sign up for my newsletter to receive the latest insights, updates,
              and tips in tech, career, and more.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:w-auto px-4 py-2 rounded-lg sm:rounded-l-lg focus:outline-none text-gray-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2 bg-white text-[#2c9c46] rounded-lg sm:rounded-r-lg hover:bg-gray-200 transition-all duration-300"
                disabled={loading}
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
            {message && <p className="mt-4">{message}</p>}
          </div>
        </section>
      </section>
    </Layout>
  );
}
