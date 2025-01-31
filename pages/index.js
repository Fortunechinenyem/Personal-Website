import { useEffect, useState } from "react";
import Layout from "@/app/components/Layout";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowUp,
  FaCode,
  FaPen,
  FaHeadset,
  FaUserGraduate,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const testimonials = [
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
  ];
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
  return (
    <Layout>
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen text-center md:text-left mt-16 px-6">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl font-extrabold dark:text-white animate__animated animate__fadeIn animate__delay-1s">
            Hi, I'm <span className="text-[#2c9c46]">Fortune</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 animate__animated animate__fadeIn animate__delay-2s">
            <TypeAnimation
              sequence={[
                "Developer",
                1000,
                "Tutor",
                1000,
                "Coach",
                1000,
                "Customer Experience Pro",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>
          <section className="py-16 bg-white dark:bg-gray-900 text-center">
            <h2 className="text-3xl font-bold dark:text-white mb-6">
              My Brand
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I’m passionate about creating meaningful digital experiences,
              empowering others through education, and building solutions that
              make a difference.
            </p>
          </section>
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
          <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <FaCode className="text-4xl text-[#2c9c46]" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Software Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Building innovative and efficient software solutions.
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-600">
              <div
                className="bg-[#2c9c46] h-2.5 rounded-full"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <FaPen className="text-4xl text-[#2c9c46]" />
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
              Coaching
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              I help to give insights, help people navigate various aspects of
              life.
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
        <p className="text-lg mt-4 mb-5">
          Whether it’s a project or a chat, I’m always open to new
          opportunities.
        </p>
        <Link
          href="/contact"
          className="px-6 py-3 bg-white text-[#2c9c46] rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          Let’s Talk
        </Link>
      </section>
      <section className="py-16 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold dark:text-white mb-6">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {[
            {
              id: 1,
              title: "How I transitoned to Tech",
              excerpt: "Learn how to kickstart your coding journey.",
              link: "#",
            },
            {
              id: 2,
              title: "The Art of Customer Experience",
              excerpt: "How to create unforgettable user experiences.",
              link: "#",
            },
            {
              id: 3,
              title: "Mental Health",
              excerpt: "The impact of mental health on overall wellbeing",
              link: "#",
            },
          ].map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {post.title}
              </h3>
              <p className="mb-7 text-gray-600 dark:text-gray-300 mt-2">
                {post.excerpt}
              </p>
              <Link
                href={post.link}
                className="px-6 py-3 bg-[#2c9c46] text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </section>
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-center dark:text-white">
          What People Are Saying
        </h3>
        <Slider {...settings} className="mt-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mx-4"
            >
              <p className="text-lg italic text-gray-700 dark:text-gray-300">
                "{testimonial.testimonial}"
              </p>
              <p className="mt-4 font-semibold text-gray-800 dark:text-white">
                {testimonial.name}{" "}
                <span className="text-gray-500">- {testimonial.role}</span>
              </p>
            </div>
          ))}
        </Slider>
      </div>
      <section className="py-16 mt-7 bg-[#2c9c46] text-white text-center">
        <h2 className="text-3xl font-bold">
          Let’s Build Something Amazing Together!
        </h2>
        <p className="text-lg mt-4 mb-7 ">
          Whether it’s a project, collaboration, or just a chat, I’d love to
          hear from you.
        </p>
        <Link
          href="/contact"
          className="px-6 py-3 bg-white text-[#2c9c46] rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          Get in Touch
        </Link>
      </section>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-[#2c9c46] text-white rounded-full shadow-lg hover:bg-[#24803a] transition-all duration-300 animate-bounce"
          aria-label="Back to Top"
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </Layout>
  );
}
