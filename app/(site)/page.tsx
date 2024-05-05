import { ScrollTo } from "@/components/ui/scroll-to";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { getAbout, getContacts, getProjects } from "@/sanity/sanity-utils"
import { BriefcaseBusiness, ContactRound, Search, SquareUserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
import Socials from "@/components/socials";

export default async function Home() {
  const projects = await getProjects();
  const contacts = await getContacts();
  const about = await getAbout("Lim Zhen Yang");

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
      <Socials contacts={contacts}/>

      <h2 className="pt-8 mt-20 font-bold text-4xl flex items-center gap-2" id="my-projects">
        <BriefcaseBusiness size={40} />some of my work.
      </h2>

      <div className="flex justify-center">
        <ProjectCarousel projects={projects} />
      </div>

      {/* About Me */}
      <h2 className="pt-8 mt-20 font-bold text-4xl flex items-center gap-2" id="my-projects">
        <SquareUserRound size={40} />more about me.
      </h2>
      {about &&
        <p className="my-28 text-lg max-w-2xl">
          {about.introduction}
        </p>
      }

      {/* Pictures */}
      <div className="flex justify-between w-full gap-6 my-28">
        <Card className="flex-[1]">
          <CardHeader>
            <CardTitle>{about?.image1.title}</CardTitle>
            <CardDescription>{about?.image1.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src={about?.image1.url!}
              width={750}
              height={750}
              className="object-cover rounded-lg border border-gray-500 aspect-square flex-[1]"
              alt="A picture of me eating prata."
            />
          </CardContent>
          <CardFooter>
            <p>{about?.image1.footer}</p>
          </CardFooter>
        </Card>
        <Card className="flex-[1]">
          <CardHeader>
            <CardTitle>{about?.image2.title}</CardTitle>
            <CardDescription>{about?.image2.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src={about?.image2.url!}
              width={750}
              height={750}
              className="object-cover rounded-lg border border-gray-500 aspect-square flex-[1]"
              alt="A picture of me eating prata."
            />
          </CardContent>
          <CardFooter>
            <p>{about?.image2.footer}</p>
          </CardFooter>
        </Card>
        <Card className="flex-[1]">
          <CardHeader>
            <CardTitle>{about?.image3.title}</CardTitle>
            <CardDescription>{about?.image3.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src={about?.image3.url!}
              width={750}
              height={750}
              className="object-cover rounded-lg border border-gray-500 aspect-square flex-[1]"
              alt="A picture of me eating prata."
            />
          </CardContent>
          <CardFooter>
            <p>{about?.image3.footer}</p>
          </CardFooter>
        </Card>
      </div>

      {/* Contact me */}
      <h2 className="pt-8 font-bold text-4xl flex items-center gap-2 my-28" id="my-projects">
        <ContactRound size={40} />why be a stranger?
      </h2>
      <EmailForm />
    </div>
  )
}
