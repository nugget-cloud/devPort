'use client'
import ProjectCard from "@/components/card";
import { useEffect, useState } from 'react';

export default function Home() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch("/api/github");
        const data = await res.json();
        setRepos(data);
      } catch (err) {
        console.log("failed to fetch the repos:", err);
      }
    }
    fetchRepos();
  }, []);

  return (
    <div className="bg-gradient-to-b from-black via-zinc-900 to-black text-white min-h-screen px-6 py-10 flex flex-col items-center">
      <header className="text-center mb-16 max-w-3xl">
        <h1 className="text-5xl font-extrabold text-red-200 mb-4 drop-shadow-md">Hi, I am Nugget-Cloud</h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          These are the projects that I have worked on over time :3 <br />
          This site is to track and showcase my projects in one place
        </p>
      </header>

      <section className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {repos.map((repo) => (
          <ProjectCard
            key={repo.id}
            name={repo.name}
            description={repo.description || "No description available"}
            html_url={repo.html_url}
          />
        ))}
      </section>
    </div>
  );
}
