import Layout from "@/app/components/Layout";
import Image from "next/image";
// import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
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
  "I once coded for 24 hours straight!",
  "I’m a huge fan of sci-fi movies.",
  "I love solving puzzles and riddles.",
  "I’ve traveled to 10+ countries.",
  "I’m a coffee enthusiast ☕.",
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
        className="relative h-[400px] flex items-center justify-center bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.JPG')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white">
          <h2 className="text-4xl font-bold">Turning Ideas into Reality</h2>
          <p className="mt-4 text-lg">
            Let’s create something extraordinary together.
          </p>
        </div>
      </section>
      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-16">
        {expertise.map((item) => (
          <div
            key={item.title}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transform transition-all hover:scale-105"
          >
            <div className="text-5xl">{item.icon}</div>
            <h3 className="text-xl font-semibold mt-4 dark:text-white">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {item.description}
            </p>
          </div>
        ))}
      </section>
      <section className="py-16 bg-gray-100 dark:bg-gray-800 text-center">
        <h2 className="text-3xl font-bold dark:text-white mb-6">Fun Fact</h2>
        <button
          onClick={showFunFact}
          className="px-6 py-3 bg-[#2c9c46] text-white rounded-lg shadow-lg hover:bg-[#24803a] transition-all duration-300"
        >
          Click Me!
        </button>
        {funFact && (
          <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
            {funFact}
          </p>
        )}
      </section>

      <section className="py-16 bg-white dark:bg-gray-900 text-center">
        <h2 className="text-3xl font-bold dark:text-white mb-6">My Journey</h2>
        <div className="container mx-auto px-6">
          <div className="relative">
            <div className="absolute h-full w-1 bg-gray-200 dark:bg-gray-700 left-1/2 transform -translate-x-1/2"></div>
            {[
              {
                id: 1,
                year: "2018",
                title: "Started Coding",
                description: "Began my journey as a self-taught developer.",
              },
              {
                id: 2,
                year: "2020",
                title: "First Job as a Developer",
                description: "Landed my first role at a tech startup.",
              },
              {
                id: 3,
                year: "2021",
                title: "Became a Tutor",
                description: "Started mentoring aspiring developers.",
              },
              {
                id: 4,
                year: "2023",
                title: "Launched My Blog",
                description: "Started sharing my knowledge and experiences.",
              },
            ].map((item, index) => (
              <div
                key={item.id}
                className={`flex ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } items-center mb-8`}
              >
                <div className="w-1/2 px-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
                <div className="w-1/2 px-4">
                  <div className="bg-[#2c9c46] text-white rounded-lg p-4 shadow-lg">
                    <p className="font-bold">{item.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
      <section className="py-16 bg-white dark:bg-gray-900 text-center">
        <div className="max-w-lg mx-auto">
          <Radar data={data} options={options} />
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
    title: "Work-Life Balance",
    description:
      "Navigating tech, family, and personal growth with purpose and passion.",
    icon: "❤️",
  },
];
