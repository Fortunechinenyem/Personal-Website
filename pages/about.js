import Layout from "@/app/components/Layout";
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import Link from "next/link";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const data = {
  labels: ["JavaScript", "React", "Node.js", "Customer Experience", "Teaching"],
  datasets: [
    {
      label: "Skill Level",
      data: [90, 85, 80, 95, 90],
      backgroundColor: "rgba(44, 156, 70, 0.2)",
      borderColor: "#2c9c46",
      borderWidth: 2,
    },
  ],
};

const options = {
  scales: {
    r: {
      angleLines: {
        display: false,
      },
      suggestedMin: 0,
      suggestedMax: 100,
    },
  },
};

const funFacts = [
  "I really love Jesus, I think He's cool🙂",
  "I love to play the acoustic guitar",
  "I’m a huge fan of Manchester United.",
  "I love solving puzzles and riddles.",
  "I Like to watch housing shows or property channels.",
  "I make the best jollof rice.",
  "I love to sing.",
];

export default function About() {
  const [funFact, setFunFact] = useState("");
  const [showButton, setShowButton] = useState(false);

  const showFunFact = () => {
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
    setFunFact(randomFact);
  };

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
      <section
        className="relative h-[500px] flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.JPG')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white">
          <h1 className="text-5xl font-bold">Hi, I'm Fortune</h1>
          <p className="mt-4 text-lg">
            Developer | Tutor | Coach | Customer Experience Pro
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#2c9c46] text-white rounded-lg hover:bg-[#24803a] transition-all duration-300"
            >
              Let’s Connect
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold dark:text-white">My Mission</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          I’m passionate about creating meaningful digital experiences,
          empowering others through education, and building solutions that make
          a difference. Let’s innovate together!
        </p>
      </section>

      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16">
        {expertise.map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition-all hover:scale-105"
          >
            <div className="text-5xl">{item.icon}</div>
            <h3 className="text-xl font-semibold mt-4 dark:text-white">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {item.description}
            </p>
          </motion.div>
        ))}
      </section>

      <section className="py-16 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold dark:text-white mb-6">
          Fun Facts About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {funFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300">{fact}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900 text-center">
        <h2 className="text-3xl font-bold dark:text-white mb-6">My Skills</h2>
        <div className="container mx-auto px-6">
          {[
            { skill: "JavaScript", level: 90 },
            { skill: "React", level: 85 },
            { skill: "Node.js", level: 80 },
            { skill: "Customer Experience", level: 95 },
            { skill: "Teaching", level: 90 },
          ].map((item, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-800 dark:text-white">
                  {item.skill}
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {item.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-[#2c9c46] h-2.5 rounded-full"
                  style={{ width: `${item.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold dark:text-white mb-6">
          What People Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
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
              className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 italic">
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

      <section className="py-16 bg-[#2c9c46] text-white text-center">
        <h2 className="text-3xl font-bold">
          Let’s Build Something Amazing Together!
        </h2>
        <p className="text-lg mt-4">
          Whether it’s a project, collaboration, or just a chat, I’d love to
          hear from you.
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="px-6 py-3 bg-white text-[#2c9c46] rounded-lg hover:bg-gray-200 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <AnimatePresence>
        {showButton && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-[#2c9c46] text-white rounded-full shadow-lg hover:bg-[#24803a] transition-all duration-300"
            aria-label="Back to Top"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <FaArrowUp className="text-xl" />
          </motion.button>
        )}
      </AnimatePresence>
    </Layout>
  );
}
const expertise = [
  {
    title: "Software Development",
    description:
      "Building scalable and high-performing applications with Next.js & JavaScript.",
    icon: "💻",
  },
  {
    title: "Technical Tutoring",
    description:
      "Helping others grow by breaking down complex tech concepts in an easy way.",
    icon: "📚",
  },
  {
    title: "Blogging & Content",
    description:
      "Sharing insights, experiences, and tutorials on technology and life.",
    icon: "✍️",
  },
  {
    title: "Customer Experience",
    description: "Ensuring top-tier support and seamless digital experiences.",
    icon: "💡",
  },
  {
    title: "Public Speaking",
    description: "Speaking at tech events and mentoring aspiring developers.",
    icon: "🎤",
  },
  {
    title: "Caoching",
    description:
      "Navigating tech, family, and personal growth with purpose and passion.",
    icon: "❤️",
  },
];
