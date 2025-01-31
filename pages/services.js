import Layout from "@/app/components/Layout";
import Link from "next/link";
import { useState, useEffect } from "react";

import Slider from "react-slider";
import {
  FaArrowUp,
  FaChalkboardTeacher,
  FaMicrophone,
  FaHandshake,
} from "react-icons/fa";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    title: "Basic",
    price: "$50",
    features: [
      "1-hour consultation session",
      "Personalized feedback on your project or career goals",
      "Email support for 7 days",
      "Guidance on coding best practices",
      "Customer service strategy tips",
      "Tutoring on a specific tech topic (e.g., JavaScript, React)",
      "Career coaching session (30 mins)",
    ],
  },
  {
    title: "Standard",
    price: "$150",
    features: [
      "3-hour consultation session",
      "Personalized feedback on your project or career goals",
      "Email & chat support for 14 days",
      "Code review and optimization tips",
      "Customer service process improvement strategies",
      "Tutoring on multiple tech topics (e.g., JavaScript, React, Node.js)",
      "Career coaching session (1 hour)",
      "Access to exclusive resources (e.g., templates, guides)",
    ],
  },
  {
    title: "Premium",
    price: "$300",
    features: [
      "6-hour consultation session",
      "Personalized feedback on your project or career goals",
      "24/7 priority support for 30 days",
      "End-to-end project guidance (planning, development, deployment)",
      "Customer service team training and process optimization",
      "Comprehensive tutoring on advanced tech topics (e.g., full-stack development, APIs)",
      "Career coaching sessions (2 hours total)",
      "Access to exclusive resources (e.g., templates, guides, video tutorials)",
      "Lifetime access to a private Slack community for ongoing support",
    ],
  },
];

export default function Services() {
  const [consultingRate, setConsultingRate] = useState(100);
  const [isClient, setIsClient] = useState(false);

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleSliderChange = (value) => {
    setConsultingRate(value);
  };
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Layout>
      <section className="relative h-[400px] flex items-center justify-center text-center bg-[url('/images/pix7.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gray-500 opacity-50"></div>
        <div className="relative text-white">
          <h1 className="text-5xl font-bold">My Services</h1>
          <p className="mt-4 text-lg">
            Empowering you with tailored solutions for growth, innovation, and
            success.
          </p>
        </div>
      </section>
      <section className="mt-20 px-4">
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
          >
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <div className="flex justify-center">
                <FaChalkboardTeacher className="text-4xl text-[#2c9c46]" />
              </div>
              <h3 className="text-2xl font-semibold text-center dark:text-white mt-4">
                Tutoring
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
                I offer personalized tutoring sessions on a variety of subjects,
                including **Tech**, **Coding**, **Mathematics**, and more.
                Whether you are a beginner or looking to advance your skills, I
                can help you achieve your learning goals.
              </p>
              <div className="mt-6 text-center">
                <Link
                  href="#contact"
                  className="mt-6 inline-block px-5 py-2 text-sm sm:text-base bg-[#2c9c46] text-white rounded-md shadow-md hover:bg-gray-200 transition-all duration-300 max-w-[180px] w-full"
                >
                  Get Tutoring
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
          >
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <div className="flex justify-center">
                <FaMicrophone className="text-4xl text-[#2c9c46]" />
              </div>
              <h3 className="text-2xl font-semibold text-center dark:text-white">
                Speaking Engagements
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
                I provide engaging speaking sessions on topics such as **Tech
                Innovations**, **Career Development**, **Personal Branding**,
                and **Work-Life Balance**. Whether you're hosting an event or
                looking for a keynote speaker, I bring passion and expertise to
                every engagement.
              </p>
              <div className="mt-6 text-center">
                <Link
                  href="/contact"
                  className="mt-6 inline-block px-5 py-2 text-sm sm:text-base bg-[#2c9c46] text-white rounded-md shadow-md hover:bg-gray-200 transition-all duration-300 max-w-[180px] w-full"
                >
                  Book Me for Speaking
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
          >
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
              <div className="flex justify-center">
                <FaHandshake className="text-4xl text-[#2c9c46]" />
              </div>
              <h3 className="text-2xl font-semibold text-center dark:text-white">
                Consulting
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
                Offering consulting services in **Tech** and **Customer
                Experience**. I help businesses optimize processes, improve user
                engagement, and build scalable solutions. Let me assist you in
                making your business thrive in a competitive market.
              </p>
              <div className="mt-6">
                <label className="block text-center text-gray-600 dark:text-gray-300">
                  Adjust Your Hourly Rate
                </label>
                <div className="slider-container mt-5 mb-10">
                  <Slider
                    min={0}
                    max={1000}
                    step={10}
                    defaultValue={500}
                    onChange={handleSliderChange}
                    renderTrack={(props, state) => (
                      <div
                        {...props}
                        style={{
                          ...props.style,
                          backgroundColor: "lightgrey",
                          height: "8px",
                        }}
                      />
                    )}
                    renderThumb={(props, state) => (
                      <div
                        {...props}
                        style={{
                          ...props.style,
                          backgroundColor: "#2c9c46",
                          height: "20px",
                          width: "20px",
                          borderRadius: "50%",
                        }}
                      />
                    )}
                  />
                </div>
                <p className="text-center text-xl font-semibold text-gray-600 dark:text-gray-300">
                  Hourly Rate: ${consultingRate} per hour
                </p>
              </div>
              <div className="mt-6 text-center">
                <Link
                  href="/contact"
                  className="mt-6 inline-block px-5 py-2 text-sm sm:text-base bg-[#2c9c46] text-white rounded-md shadow-md hover:bg-gray-200 transition-all duration-300 max-w-[180px] w-full"
                >
                  Request a Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold dark:text-white">Pricing Plans</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            Choose a plan that suits your needs and budget.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
              >
                <h3 className="text-2xl font-semibold text-center dark:text-white">
                  {plan.title}
                </h3>
                <p className="text-4xl font-bold text-[#2c9c46] text-center mt-4">
                  {plan.price}
                </p>
                <ul className="mt-6 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-gray-600 dark:text-gray-300 flex items-center"
                    >
                      <span className="mr-2">✔️</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-center">
                  <button className="px-6 py-3 bg-[#2c9c46] text-white rounded-lg hover:bg-[#24803a] transition-all duration-300">
                    Choose Plan
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold dark:text-white">
            What People Are Saying
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            Hear from those who have benefited from my services.
          </p>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                name: "Ejurah",
                role: "Mentee",
                testimonial:
                  "Fortune's mentorship transformed my career! Her guidance is invaluable and her insights are spot on.",
              },
              {
                id: 2,
                name: "Mr Stanley",
                role: "Client",
                testimonial:
                  "The customer experience services provided by Fortune were exceptional. She goes above and beyond to meet your needs.",
              },
              {
                id: 3,
                name: "Chibueze",
                role: "Colleague",
                testimonial:
                  "Working with Fortune has been a pleasure. She’s a true professional with a wealth of knowledge and a generous spirit.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
              >
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "{testimonial.testimonial}"
                </p>
                <p className="mt-4 font-semibold text-gray-800 dark:text-white">
                  {testimonial.name}{" "}
                  <span className="text-gray-500">- {testimonial.role}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-20 py-16 bg-[#2c9c46] text-white text-center">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="text-lg mt-4">
            Let’s work together to achieve your goals. Contact me today!
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="px-6 py-3  bg-white text-[#2c9c46] rounded-lg hover:bg-blue-700"
            >
              Contact Me
            </Link>
          </div>
        </section>
      </section>
      <div className="group fixed bottom-8 right-8">
        <button
          onClick={scrollToTop}
          className="p-4 bg-[#2c9c46] text-white rounded-full shadow-lg hover:bg-[#24803a] transition-all duration-300"
          aria-label="Back to Top"
        >
          <FaArrowUp className="text-xl" />
        </button>
        <div className="absolute bottom-14 right-0 bg-gray-800 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Back to Top
        </div>
      </div>
    </Layout>
  );
}
