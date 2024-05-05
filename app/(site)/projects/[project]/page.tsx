import { getProject } from "@/sanity/sanity-utils";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { ChevronLeft, Github, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { types } from "util";
import React from "react";


export default async function Project(
  { params }:
    {
      params:
      { project: string }
    }
) {

  const slug = params.project;
  const project = await getProject(slug);

  const myPortableTextComponents: PortableTextComponents = {
    block: ({ children }: any) => <p className="mb-4">{children}</p>,
    list: {
      number: ({ children }: any) => <ol className="ml-7 list-decimal">{children}</ol>,
      bullet: ({ children }: any) => <ul className="ml-7 list-disc">{children}</ul>,
    }
  };

  return (
    project ?
      <div className="md:my-24 m-8">
        <header className="flex gap-2 items-center">
          <Link href="/">
            <ChevronLeft />
          </Link>
          <h1
            className="text-gray-300 text-3xl drop-shadow-sm font-bold"
          >
            {project?.name}
          </h1>
        </header>
        <div className="flex gap-8 flex-col-reverse md:flex-row justify-center">
          <div className="text-lg text-gray-200 mt-5 flex-[1]">
            <PortableText value={project?.content!} components={myPortableTextComponents} />
          </div>
          <div className="flex-[1]">
            <Image
              src={project.image!}
              alt={project.name || "Project image"}
              width={1920}
              height={1080}
              className="mt-5 border-2 border-gray-200 object-cover rounded-md"
            />
            <div className="flex justify-between items-start">
              <div className="my-4 flex justify-start gap-2 items-center">
                {project.technologies ? project.technologies.map((technology) => (
                  <HoverCard key={technology._id}>
                    <HoverCardTrigger href={technology.url} target="_blank">
                      <Image
                        alt={technology.image?.alt!}
                        src={technology.imageUrl!}
                        width={50}
                        height={50}
                        className="w-8 rounded-md"
                      />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-fit flex flex-col gap-2">
                      {technology.name}
                      <p className="text-gray-400 text-xs">{technology.url}</p>
                    </HoverCardContent>
                  </HoverCard>
                ))
                  :
                  null}
              </div>
              <div className="flex flex-row md:flex-col gap-2 justify-end my-4">
                <Link href={project?.repositoryUrl || ""} className="flex gap-2 items-center hover:text-blue-500 transition duration-700">
                  <Github />
                  <p className="md:block hidden">
                    View repository
                  </p>
                </Link>
                <Link href={project?.projectUrl || ""} className="flex gap-2 items-center hover:text-blue-500 transition duration-700">
                  <Link2 />
                  <p className="md:block hidden">
                    View project
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      :
      <div className="w-full h-full flex justify-center items-center">
        Project not found!
      </div>
  );
}
