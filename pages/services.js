import Layout from "@/app/components/Layout";
import Link from "next/link";
import { useState } from "react";
import Slider from "react-slider";

export default function Services() {
  const [consultingRate, setConsultingRate] = useState(100); // Example rate per hour

  const handleSliderChange = (value) => {
    setConsultingRate(value);
  };

  return (
    <Layout>
      <section className="mt-20 px-4">
        <h2 className="text-4xl font-bold text-center dark:text-white">
          My Services
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mt-4">
          I offer a range of services to help you grow in your career, business,
          and personal life.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-center dark:text-white">
              Tutoring
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
              I offer personalized tutoring sessions on a variety of subjects,
              including **Tech**, **Coding**, **Mathematics**, and more. Whether
              you are a beginner or looking to advance your skills, I can help
              you achieve your learning goals.
            </p>
            <div className="mt-6 text-center">
              <Link
                href="#contact"
                className="px-6 py-3 bg-[#2c9c46] text-white rounded-lg hover:bg-blue-700"
              >
                Get Tutoring
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-center dark:text-white">
              Speaking Engagements
            </h3>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-4">
              I provide engaging speaking sessions on topics such as **Tech
              Innovations**, **Career Development**, **Personal Branding**, and
              **Work-Life Balance**. Whether you're hosting an event or looking
              for a keynote speaker, I bring passion and expertise to every
              engagement.
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

          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
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
              <div className="slider-container mt-7 mb-12">
                <Slider
                  min={0}
                  max={1000}
                  step={10}
                  defaultValue={500}
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
        </div>

        <section id="contact" className="mt-20 text-center">
          <h2 className="text-3xl font-bold dark:text-white">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            If you're interested in any of the services above, feel free to
            reach out and let's make it happen.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#2c9c46] text-white rounded-lg hover:bg-blue-700"
            >
              Contact Me
            </Link>
          </div>
        </section>
      </section>
    </Layout>
  );
}
