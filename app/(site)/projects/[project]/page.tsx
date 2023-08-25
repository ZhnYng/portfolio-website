import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <header className="flex justify-between items-center">
        <h1 
          className="text-gray-300 text-5xl drop-shadow-sm font-extrabold"
        >
          {project.name}
        </h1>
        <div>
          <a
            href={project.url}
            title="View Project"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-300 rounded-lg text-gray-600 
            font-bold py-3 px-4 mx-2 whitespace-nowrap hover:bg-gray-500
            hover:text-gray-300 transition"
          >
            View Project
          </a>
          <a
            href={project.githubUrl}
            title="GitHub Repo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-300 rounded-lg text-gray-600 
            font-bold py-3 px-4 mx-2 whitespace-nowrap hover:bg-gray-500
            hover:text-gray-300 transition"
          >
            Github Repo
          </a>
        </div>
      </header>
      <div className="text-lg text-gray-200 mt-5">
        <PortableText value={project.content}/>
      </div>
      {project.image && (
        <Image
          src={project.image}
          alt={project.name}
          width={1920}
          height={1080}
          className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
        />
      )}
    </div>
  );
}
