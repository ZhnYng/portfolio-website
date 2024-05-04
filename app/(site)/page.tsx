import { ScrollTo } from "@/components/ui/scroll-to";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { getContacts, getHackathons, getProjects } from "@/sanity/sanity-utils"
import { Briefcase, BriefcaseBusiness, ContactRound, FileText, Github, Instagram, Link2, Linkedin, Search, SquareUserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import ProjectCarousel from "@/components/project-carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import EmailForm from "@/components/email-form";
import { Canvas } from "@react-three/fiber";

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
        <HoverCard>
          <HoverCardTrigger href="https://github.com/ZhnYng">
            <Github />
          </HoverCardTrigger>
          <HoverCardContent className="w-fit flex flex-col gap-2">
            <div className="flex items-center">
              Github -
              ZhnYng
            </div>
            <p className="text-gray-400 text-xs">https://github.com/ZhnYng</p>
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger href="https://www.linkedin.com/in/limzhenyang-tech">
            <Linkedin />
          </HoverCardTrigger>
          <HoverCardContent className="w-fit flex flex-col gap-2">
            <div className="flex items-center">
              LinkedIn -
              Lim Zhen Yang
            </div>
            <p className="text-gray-400 text-xs">https://www.linkedin.com/in/limzhenyang-tech</p>
          </HoverCardContent>
        </HoverCard>
      </div>

      <h2 className="pt-8 mt-20 font-bold text-4xl flex items-center gap-2" id="my-projects">
        <BriefcaseBusiness size={40} />some of my work.
      </h2>

      <div className="flex justify-center">
        <ProjectCarousel projects={projects} />
      </div>

      {/* About Me */}
      <h2 className="pt-8 font-bold text-4xl flex items-center gap-2" id="my-projects">
        <SquareUserRound size={40} />more about me.
      </h2>
      <p className="my-28 text-lg max-w-2xl">
        I am a final year student studying applied artificial intelligence and analysis in Singapore Polytechnic 🎓.
        I believe a large part of AI is making it accessible and beneficial for people, which is why I have focused
        a lot on building applications. And also I really enjoy doing it 😊.
      </p>

      {/* Pictures */}
      <div className="flex justify-between w-full gap-6 my-28">
        <Card className="flex-[1]">
          <CardHeader>
            <CardTitle>Overnight hackathon</CardTitle>
            <CardDescription>Lau Pa Sat, 18 Raffles Quay</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src={'/lau-pa-sat-prata.jpg'}
              width={750}
              height={750}
              className="object-cover rounded-lg border border-gray-500 aspect-square flex-[1]"
              alt="A picture of me eating prata."
            />
          </CardContent>
          <CardFooter>
            <p>Eating prata for supper</p>
          </CardFooter>
        </Card>
        <Card className="flex-[1]">
          <CardHeader>
            <CardTitle>AWS office</CardTitle>
            <CardDescription>23 Church Street, Capital Square</CardDescription>
          </CardHeader>
          <CardContent>
            <Image 
              src={'/aws-office.jpg'}
              width={750}
              height={750}
              className="object-cover rounded-lg border border-gray-500 aspect-square flex-[1]"
              alt="A picture of me eating prata."
            />
          </CardContent>
          <CardFooter>
            <p>Sitting in a work pod</p>
          </CardFooter>
        </Card>
        <Card className="flex-[1]">
          <CardHeader>
            <CardTitle>Hackathon bash</CardTitle>
            <CardDescription>Google Developers Space</CardDescription>
          </CardHeader>
          <CardContent>
            <Image 
              src={'/google-dev-space.jpg'}
              width={750}
              height={750}
              className="object-cover rounded-lg border border-gray-500 aspect-square flex-[1]"
              alt="A picture of me eating prata."
            />
          </CardContent>
          <CardFooter>
            <p>Networking with other participants</p>
          </CardFooter>
        </Card>
      </div>

      {/* Contact me */}
      <h2 className="pt-8 font-bold text-4xl flex items-center gap-2 my-28" id="my-projects">
        <ContactRound size={40} />why be a stranger?
      </h2>
      <EmailForm />

      {/* Hackathons */}
      {/* <h2 className="mt-24 font-bold text-gray-300 text-3xl">
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
      </div> */}
    </div>
  )
}
