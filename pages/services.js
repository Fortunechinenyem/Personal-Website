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
      <section className="relative h-[400px] flex items-center justify-center text-center bg-[url('/images/hero.JPG')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#2c9c46] "></div>
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
                  className="px-6 py-3 bg-[#2c9c46] text-white rounded-lg hover:bg-[#24803a] transition-all duration-300"
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
                  className="px-6 py-3 bg-[#2c9c46] text-white rounded-lg hover:bg-blue-700"
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
                  className="px-6 py-3 bg-[#2c9c46] text-white rounded-lg hover:bg-blue-700"
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
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Basic",
                price: "$100",
                features: [
                  "1-hour session",
                  "Personalized feedback",
                  "Email support",
                ],
              },
              {
                title: "Standard",
                price: "$250",
                features: [
                  "3-hour session",
                  "Personalized feedback",
                  "Email & chat support",
                ],
              },
              {
                title: "Premium",
                price: "$500",
                features: [
                  "6-hour session",
                  "Personalized feedback",
                  "24/7 priority support",
                ],
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
              >
                <h3 className="text-2xl font-semibold dark:text-white">
                  {plan.title}
                </h3>
                <p className="text-4xl font-bold text-[#2c9c46] mt-4">
                  {plan.price}
                </p>
                <ul className="mt-6 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300">
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-center">
                  <Link
                    href="/contact"
                    className="px-6 py-3 bg-[#2c9c46] text-white rounded-lg hover:bg-[#24803a] transition-all duration-300"
                  >
                    Choose Plan
                  </Link>
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
                name: "Jane Doe",
                role: "Student",
                testimonial:
                  "Fortune's tutoring helped me land my first tech job. Highly recommend!",
              },
              {
                name: "John Smith",
                role: "Client",
                testimonial:
                  "The consulting services were top-notch. Our business processes have improved significantly.",
              },
              {
                name: "Emily White",
                role: "Event Organizer",
                testimonial:
                  "Fortune's speaking engagement was the highlight of our event. Engaging and insightful!",
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
