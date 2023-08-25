import { getHackathons, getProjects } from "@/sanity/sanity-utils"
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  const hackathons = await getHackathons();

  return (
    <div>
      <h1 className="text-7xl font-extrabold">
        Hello I&apos;m {" "}
        <span 
          className="bg-gradient-to-r from-white 
          to-gray-600 bg-clip-text text-transparent"
        >
          Zhen Yang
        </span>
      </h1>
      <p className="mt-3 text-xl text-gray-400">
        Take a look at my projects!
      </p>
      <h2 className="mt-24 font-bold text-gray-300 text-3xl">
        My Projects
      </h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project)=> (
          <Link
            href={`/projects/${project.slug}`} 
            key={project._id} 
            className="border-2 border-gray-500 rounded-lg p-3 
              hover:scale-105 hover:border-white transition"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div 
              className="mt-2 font-bold"
            >
              {project.name}
            </div>
          </Link>
        ))}
      </div>
      {/* Hackathons */}
      <h2 className="mt-24 font-bold text-gray-300 text-3xl">
        Hackathons
      </h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hackathons.map((hackathon)=> (
          <Link
            href={`/hackathons/${hackathon.slug}`} 
            key={hackathon._id} 
            className="border-2 border-gray-500 rounded-lg p-3 
              hover:scale-105 hover:border-white transition"
          >
            {hackathon.image && (
              <Image
                src={hackathon.image}
                alt={hackathon.name}
                width={750}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div 
              className="mt-2 font-bold"
            >
              {hackathon.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
