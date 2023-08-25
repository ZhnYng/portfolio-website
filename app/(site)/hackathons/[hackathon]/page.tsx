import { getHackathon } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { hackathon: string };
};

export default async function Hackathon({ params }: Props) {
  const slug = params.hackathon;
  const hackathon = await getHackathon(slug);

  return (
    <div>
      <header className="flex justify-between items-center">
        <h1 className="text-gray-300 text-5xl drop-shadow-sm font-extrabold">
          {hackathon.name}
        </h1>
        <a
          href={hackathon.url}
          title="View Project"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-300 rounded-lg text-gray-600 
                font-bold py-3 px-4 whitespace-nowrap hover:bg-gray-500
                hover:text-gray-300 transition"
        >
          View Project
        </a>
      </header>
      <div className="text-lg text-gray-200 mt-5">
        <PortableText value={hackathon.content}/>
      </div>
      {hackathon.image && (
        <Image
          src={hackathon.image}
          alt={hackathon.name}
          width={1920}
          height={1080}
          className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
        />
      )}
    </div>
  );
}
