"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Project } from "@/types/Project";
import Autoplay from "embla-carousel-autoplay"
import { Github, Link2, LucideExternalLink } from "lucide-react";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectCarousel({ projects }: { projects: Project[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-3xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="flex items-center p-12 my-24">
        {projects.map((project) => {
          return (
            <CarouselItem key={project._id}>
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={1980}
                  height={1080}
                  className="object-cover rounded-lg border border-gray-500"
                />
              )}
              <div
                className="my-4 text-xl flex justify-between items-center"
              >
                <p className="max-w-sm">
                  {project.name}
                </p>
                <Link
                  href={`/projects/${project.slug}`}
                  key={project._id}
                  className="rounded-lg p-3 flex text-sm gap-2 items-center hover:text-blue-500 transition duration-700"
                >
                  <LucideExternalLink size={30}/>
                  Find out more
                </Link>
              </div>
              <div className="flex gap-6">
                <Link href={project.githubUrl} className="flex gap-2 items-center">
                  <Github />
                  View repository
                </Link>
                <Link href={project.url} className="flex gap-2 items-center">
                  <Link2/>
                  View project
                </Link>
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}