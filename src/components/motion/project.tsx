"use client";

import { motion } from "framer-motion";
import { Milestone } from "lucide-react";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type Repo = {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
  homepage: string;
  topics: string[];
  pushed_at: string;
  created_at: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.5, ease: "easeOut" } },
};

function Project() {
  const [repos, setRepos] = useState<Repo[]>([]);

  const fetchRepos = async () => {
    const response = await fetch("https://api.github.com/users/veloxium/repos");
    const data = await response.json();
    const filteredData = data.filter((repo: Repo) => repo.stargazers_count > 0);
    const newFirst = filteredData.sort(
      (a: Repo, b: Repo) =>
        new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
    );
    setRepos(newFirst);
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div className="relative min-h-screen bg-white py-10 px-8">
      <div className="flex flex-col">
        <div className="text-zprimary text-justify flex flex-col gap-2 md:max-w-1/2 w-full md:mx-auto">
          <div className="bg-white sticky top-10 rounded-md">
            <div className="flex flex-col mb-2 mt-10 bg-white py-4 px-4 rounded-md border-2 border-b-4 border-r-4 z-10">
              <p className="text-4xl font-chonburi">Projects</p>
              <p className="mt-6 md:text-lg">
                Some of my coolest builds—crafted with code and a bit of magic.
              </p>
            </div>
          </div>
          <div className="mt-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              exit="exit"
              viewport={{ amount: 0.2, once: true }}
              className="grid grid-cols-1 gap-6"
            >
              {repos.length !== 0 ? (
                repos.map((repo: Repo) => (
                  <motion.div
                    variants={itemVariants}
                    key={repo.id}
                    className="bg-white flex flex-col justify-between rounded-md border-2 border-b-4 border-r-4 px-4 py-6"
                  >
                    <div>
                      <p className="text-xl font-chonburi">{repo.name}</p>
                      <p className="md:text-lg">{repo.description}</p>
                      <div className="flex flex-wrap mt-2 gap-2">
                        {repo.topics.map((topic) => (
                          <span
                            key={topic}
                            className="text-sm bg-zprimary text-white px-2 py-1 rounded-md mr-2 hover:bg-zsecondary"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                      <div className="mt-3">
                        <p className="text-gray-500 text-xs">
                          Last updated:{" "}
                          {new Date(repo.pushed_at).toDateString()}
                        </p>
                        <p className="text-gray-500 text-xs">
                          Created: {new Date(repo.created_at).toDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="mt-5 flex gap-2 md:justify-between">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-zprimary hover:underline zbutton"
                      >
                        View on GitHub
                      </a>
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noreferrer"
                          className="zbuttontwo flex items-center gap-1"
                        >
                          View Live
                          <Milestone />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="bg-white flex flex-col justify-between rounded-md border-2 border-b-4 border-r-4 px-4 py-6">
                  <Skeleton height={30} width={`80%`} />
                  <Skeleton count={3} />
                  <div className="flex flex-wrap mt-2 gap-2">
                    <Skeleton height={20} width={50} />
                    <Skeleton height={20} width={50} />
                    <Skeleton height={20} width={50} />
                  </div>
                  <div className="mt-2">
                    <Skeleton height={20} width={`60%`} />
                    <Skeleton height={20} width={`60%`} />
                  </div>
                  <div className="mt-5">
                    <Skeleton height={30} width={`40%`} />
                  </div>
                </div>
              )}
              {repos.length !== 0 && (
                <motion.div
                  variants={itemVariants}
                  key={"soon"}
                  className="bg-white flex flex-col justify-between rounded-md border-2 border-b-4 border-r-4 px-4 py-6"
                >
                  <p>Update coming soon!</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
