import { ScrollTo } from "@/components/ui/scroll-to";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { getContacts, getHackathons, getProjects } from "@/sanity/sanity-utils"
import { Briefcase, BriefcaseBusiness, Github, Instagram, Linkedin, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default async function Home() {
  const projects = await getProjects();
  const hackathons = await getHackathons();
  const contacts = await getContacts();

  return (
    <div className="px-14" id="scrolling_div">
      <div className="absolute right-5 top-5 h-full">
        <div className='sticky right-5 top-5'>
          <ModeToggle />
        </div>
      </div>
      <header className='flex items-center justify-between my-20'>
        <p>Lim Zhen Yang</p>
        <div className="flex items-center gap-2">
          <Search />
          <Input
            type='text'
            placeholder='Search here'
          />
        </div>
      </header>
      <h1 className="text-6xl font-bold max-w-3xl my-28">
        building solutions is my hobby.
      </h1>
      <ScrollTo
        targetId="my-projects"
        className="text-xl"
      >
        Take a look at my projects.
      </ScrollTo>

      {/* Self introduction */}
      <p className="my-28 md:w-1/2">Hi! 👋, my name is Zhen Yang and I am a software engineer, passionate
        about software that directly impact and benefit the lives of people.</p>

      {/* Socials */}
      <div className="flex gap-4 justify-end">
        <Link href="">
          <HoverCard>
            <HoverCardTrigger>
              <Github />
            </HoverCardTrigger>
            <HoverCardContent className="w-fit flex flex-col gap-2">
              <div className="flex items-center">
                Github -
                <div className="rounded-full p-4 bg-gray-400 mx-1 border border-white"></div>
                ZhnYng
              </div>
              <p className="text-gray-400 text-xs">www.linkedin.com/in/limzhenyang-tech</p>
            </HoverCardContent>
          </HoverCard>
        </Link>
        <Link href="">
          <HoverCard>
            <HoverCardTrigger>
              <Linkedin />
            </HoverCardTrigger>
            <HoverCardContent className="w-fit flex flex-col gap-2">
              <div className="flex items-center">
                LinkedIn -
                <div className="rounded-full p-4 bg-gray-400 mx-1 border border-white"></div>
                {/* <Image 
                    alt="LinkedIn profile picture"
                    src="https://media.licdn.com/dms/image/D5603AQFpqaprtFYJAg/profile-displayphoto-shrink_400_400/0/1699660077611?e=1719446400&v=beta&t=tTeJhIxEBz3AVuG_UKaNBNFGdhPSKlQh0sjXtfQHUdY"
                    width={100}
                    height={100}
                  /> */}
                Lim Zhen Yang
              </div>
              <p className="text-gray-400 text-xs">www.linkedin.com/in/limzhenyang-tech</p>
            </HoverCardContent>
          </HoverCard>
        </Link>
      </div>

      <h2 className="pt-24 font-bold text-4xl flex items-center gap-2" id="my-projects">
        <BriefcaseBusiness size={40}/>my best works.
      </h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
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
        {hackathons.map((hackathon) => (
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
