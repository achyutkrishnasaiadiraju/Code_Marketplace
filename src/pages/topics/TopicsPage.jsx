import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrArticle } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";

const TopicsPage = () => {
  const [query, setQuery] = useState("");
  const [topics, setTopics] = useState([
    {
      id: 1,
      name: "Advancements in Quantum Computing",
      content:
        "Explore the latest advancements in quantum computing. Discuss how quantum computers work, current research, and their potential applications in various fields such as cryptography, materials science, and artificial intelligence.",
    },
    {
      id: 2,
      name: "Blockchain Technology and Cryptocurrency",
      content:
        "Dive into the world of blockchain technology and cryptocurrency. Learn about the fundamentals of blockchain, its applications beyond cryptocurrency, and the future of digital currencies like Bitcoin and Ethereum.",
    },
    {
      id: 3,
      name: "The Future of Artificial Intelligence",
      content:
        "Discuss the future of artificial intelligence and its impact on various industries. Topics include advancements in machine learning, AI ethics, and the potential for AI to transform healthcare, finance, and more.",
    },
    {
      id: 4,
      name: "Building Scalable Web Applications",
      content:
        "Learn the best practices for building scalable web applications. Topics include choosing the right architecture, using cloud services, optimizing performance, and managing databases effectively.",
    },
    {
      id: 5,
      name: "Internet of Things (IoT) Innovations",
      content:
        "Explore the latest innovations in the Internet of Things (IoT). Discuss the impact of IoT on smart homes, healthcare, industrial automation, and the challenges of security and data privacy.",
    },
    {
      id: 6,
      name: "Cybersecurity Threats and Solutions",
      content:
        "Discuss the latest cybersecurity threats and solutions. Learn about common attack vectors, best practices for protecting systems and data, and the role of AI and machine learning in cybersecurity.",
    },
    {
      id: 7,
      name: "Data Science and Big Data Analytics",
      content:
        "Explore the field of data science and big data analytics. Topics include data collection, processing, and analysis techniques, as well as real-world applications in business, healthcare, and more.",
    },
    {
      id: 8,
      name: "Advances in Renewable Energy Technology",
      content:
        "Discuss the advances in renewable energy technology. Learn about the latest developments in solar, wind, and hydro power, as well as the potential for new technologies like hydrogen fuel cells.",
    },
    {
      id: 9,
      name: "Augmented Reality (AR) and Virtual Reality (VR)",
      content:
        "Explore the applications and future of augmented reality (AR) and virtual reality (VR). Discuss their impact on gaming, education, healthcare, and other industries.",
    },
    {
      id: 10,
      name: "Ethical Implications of Biotechnology",
      content:
        "Discuss the ethical implications of biotechnology advancements. Topics include genetic engineering, CRISPR, stem cell research, and the potential benefits and risks of these technologies.",
    },
  ]);

  const handleSubmit = () => {
    console.log("Topic Submit");
  };

  return (
    <>
      <form
        className="m-4 mx-auto flex max-w-sm items-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <GrArticle size={24} />
          </div>
          <input
            type="text"
            id="search"
            value={query}
            className="block w-full rounded-lg border border-border bg-gray-50 p-2.5 ps-10 text-sm font-medium text-secondary focus:border-primary-dark focus:ring-primary"
            placeholder="Search Topic List"
            onChange={(e) => setQuery(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="ms-2 rounded-lg border border-primary bg-primary p-2.5 text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary"
        >
          <IoSearch />
          <span className="sr-only">Search</span>
        </button>
      </form>
      <div className="max-h-96 overflow-y-scroll">
        {topics.map((topic) => (
          <div
            className="flex flex-wrap justify-center rounded-lg"
            key={topic.id}
          >
            <div className="w-full p-4">
              <div className="flex flex-row justify-between gap-4 overflow-hidden rounded-lg bg-white shadow-md">
                <div className="flex flex-col justify-between px-4 py-2">
                  <Link to={`${topic.id}`}>
                    <h5 className="text-xl font-bold">{topic.name}</h5>
                  </Link>
                  <p className="text-justify text-gray-700">{topic.content}</p>
                </div>
                <div className="px-4 py-2">
                  <button className="rounded-lg px-4 py-2 text-lg font-medium text-secondary hover:bg-gray-100 hover:text-primary focus:outline-none focus:ring-offset-2">
                    <span className="">Follow</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopicsPage;
