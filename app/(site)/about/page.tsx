import { getAbouts, getContacts } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function About() {
  const contacts = await getContacts();
  const abouts = await getAbouts();
  console.log(abouts)

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
      <div className="flex gap-10 py-7">
        {contacts.map((contact) => (
          <div 
            key={contact._id} 
            className="flex gap-2 items-center"
          >
            <Image
              src={contact.favicon}
              alt={contact.username}
              width={50}
              height={50}
              className="object-cover rounded-full border bg-white p-0.5"
            />
            <a
              href={contact.profileLink}
              title="Link to Profile"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-xl"
            >
              {contact.username}
            </a>
          </div>
        ))}
      </div>
      <div className="py-12">
        {abouts.map(about => (
          <div key={about._id}>
            <h1 className="text-5xl font-bold py-4">
              {about.title}
            </h1>
            <div className="py-3 text-xl text-gray-300">
              <PortableText value={about.content}/>
            </div>
            <p className="flex justify-end mt-5">{about.imageDesc}</p>
            <Image
              src={about.image}
              alt={about.imageDesc}
              width={1920}
              height={1080}
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
